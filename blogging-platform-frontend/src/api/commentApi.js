import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/comment";

export const createUser = async (userData) => {
    return axios.post(`${BASE_URL}/createComment`, userData);
};
