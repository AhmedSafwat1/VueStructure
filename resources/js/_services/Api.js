import axios from "axios";
import { authHeader } from '../_helpers';
export default () => {
    return axios.create({
        baseURL: `http://127.0.0.1:8000/api/`,
        headers: authHeader()
    });
};
