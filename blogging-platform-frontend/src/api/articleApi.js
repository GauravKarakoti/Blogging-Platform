import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/article";

export const createArticle = async (userData) => {
    return axios.post(`${BASE_URL}/createArticle`, userData);
};
