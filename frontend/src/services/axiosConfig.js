import axios from 'axios';
import { getAccessToken } from "../helpers/auth";

export const BASE_API_URL = (process.env.NODE_ENV !== 'production') ? 'http://toolcv_api.local' : '';

const axiosConfig = axios.create({
    baseURL: BASE_API_URL
});
axiosConfig.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
axiosConfig.defaults.headers.post['Accept'] = 'application/json';

export { axiosConfig };