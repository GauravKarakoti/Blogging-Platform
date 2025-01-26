import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/user";

export const createUser = async (userData) => {
    return axios.post(`${BASE_URL}/createUser`, userData);
};

export const fetchUsers = async () => {
    return axios.get(`${BASE_URL}/getUsers`);
};
