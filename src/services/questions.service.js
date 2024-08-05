import axios from "axios";
import { config } from "@/config";
async function getLatestQuestion() {
    try {
        const response = await axios.get(`${config.api_url}/v1/questions/threeLatest`);
        return response.data;
    } catch (error) {
        console.error('Error while fetching latest questions:', error);
        throw error; 
    }
}


export {
    getLatestQuestion
}