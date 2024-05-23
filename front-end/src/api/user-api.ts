import axios from 'axios';
import BASE_URL from '../config';

const registerUserAPI = () => (payload : any) => {
 return axios.post(`${BASE_URL}/api/v1/users/signup`, payload)
}

export const userAPI = {
    registerUserAPI: registerUserAPI()
}