import axios from "axios";
import { config } from "@/config";

async function getPrivacies(){
    try{
        const response = await axios.get(`${config.api_url}/v1/privacies`)
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export {
    getPrivacies,
}