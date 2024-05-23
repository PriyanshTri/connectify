import axios from 'axios';
import BASE_URL from '../config';

const registerUserAPI = () => (payload : any) => {
 return axios.post(`${BASE_URL}/api/v1/users/signup`, payload)
}

const generateOTP = () => (payload: any) => {
   return axios.post(`${BASE_URL}/api/v1/signup-verification`, payload)
}

export const userAPI = {
    registerUserAPI: registerUserAPI(),
    generateOTP: generateOTP()
}