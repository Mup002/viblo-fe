import axios from "axios";
import { config } from "@/config";

async function findTag(name){
    try {
        const response = await axios.get(`${config.api_url}/v1/tags?name=${name}`)
        return response.data;
    }catch(error){
        console.log(error)
    }

}
export {
    findTag,
}
