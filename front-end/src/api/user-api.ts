import axios from 'axios';
import BASE_URL from '../config';

const registerUserAPI = () => (payload : any) => {
 return axios.post(`${BASE_URL}/api/v1/users/signup`, payload)
}

const generateOTP = () => (payload: any) => {
   return axios.post(`${BASE_URL}/api/v1/signup-verification`, payload)
}

const loginUser = () => (payload: any) => {
    return axios.post(`${BASE_URL}/api/v1/users/login`, payload)
}

const validateUserNameAndEmail = () => (payload : any) => {
    return axios.post(`${BASE_URL}/api/v1/users/userValidation`, payload)
} 

export const userAPI = {
    registerUserAPI: registerUserAPI(),
    generateOTP: generateOTP(),
    loginUser: loginUser(),
    validateUserNameAndEmail: validateUserNameAndEmail()
}