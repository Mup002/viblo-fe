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

///AUTH
async function getArticleByBookmark(userId, pageNumber) {
  try {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${this.userData.access_token}`,
    //   },
    // };
    const response = await axios.get(
      `${config.api_url}/articles-management/users/bookmarks?userId=${userId}&page=${pageNumber}`,{
        withCredentials: true,
        credentials: "include",
      }
    );
    // this.articleList = response.data.article;

    // this.pageInfo = response.data.page;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function getArticleByFollower(userId, pageNumber)
{
    try {
    //     const config = {
    //     headers: {
    //         'Authorization': `Bearer ${this.userData.access_token}`
    //     }
    // }
        const response = await axios.get(`${config.api_url}/articles-management/users/followers?userId=${userId}&page=${pageNumber}`,{
            withCredentials: true,
        credentials: "include",
        })
        // this.articleList = response.data.article
       
        // this.pageInfo = response.data.page
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export { getArticle, getArticleByBookmark,getArticleByFollower };
