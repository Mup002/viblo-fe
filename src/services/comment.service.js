import axios from "axios";
import { config } from "@/config";

async function getComments(id) {
  try {
    const response = await axios.get(`${config.api_url}/v1/comments?article_id=${id}`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
async function createComment(data){
  try {
    const response = await axios.post(`${config.api_url}/comments`,data,{
      withCredentials: true,
      credentials: "includes"
    })
    if(response){
      return response;
    }
  }catch(error){
    console.log(error);
  }
}
export{
    getComments,
    createComment
}