import { config } from "@/config";
import axios from "axios";

async function register(data) {
  try {
    const response = axios.post(`${config.api_url}/v1/register`, data);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
export { register };
