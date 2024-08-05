import axios from "axios";
import { config } from "@/config";

async function getArticle(pageNumber) {
  try {
    const response = await axios.get(
      `${config.api_url}/v1/articles?page=${pageNumber}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getArticleDetails(url) {
  const response = axios.get(`${config.api_url}/v1/articles/${url}`)
  if(response){
    return response;
  }
}
async function getArticlesRelateByAuthor(url) {
  const response = axios.get(
    `${config.api_url}/v1/articles/author-relate/${url}`
  );
  if (response) {
    return response;
  }
}
async function getArticleRelate(url) {
  const response = axios.get(`${config.api_url}/v1/articles/relate/${url}`)

  if (response) {
    return response;
  }
}
///AUTH
async function getArticleByBookmark(userId, pageNumber) {
  try {
    const response = await axios.get(
      `${config.api_url}/articles-management/users/bookmarks?userId=${userId}&page=${pageNumber}`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function getArticleByFollower(userId, pageNumber) {
  try {
    const response = await axios.get(
      `${config.api_url}/articles-management/users/followers?userId=${userId}&page=${pageNumber}`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function createArticle(payload) {
  const response = axios
    .post(`${config.api_url}/users/articles`, payload, {
      withCredentials: true,
      credentials: "includes",
    })
    .catch((error) => {
      console.log(error);
    });
  if (response.data) {
    return response;
  }
}
async function getArticleAuth(url) {
  const response = axios
    .get(`${config.api_url}/users/articles/${url}`, {
      withCredentials: true,
      credentials: "includes",
    })
    .catch((error) => {
      console.log(error);
    });
  if (response) {
    return response;
  }
}

export {
  getArticle,
  getArticleByBookmark,
  getArticleByFollower,
  createArticle,
  getArticleAuth,
  getArticleDetails,
  getArticlesRelateByAuthor,
  getArticleRelate
};
