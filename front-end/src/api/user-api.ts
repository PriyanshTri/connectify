import axios from 'axios';
import BASE_URL from '../config';

const registerUserAPI = () => (payload : any) => {
 return axios.post(`${BASE_URL}/api/v1/users/signup`, payload)
}

const generateOTP = () => (payload: any) => {
   return axios.post(`${BASE_URL}/api/v1/users/signup-verification`, payload)
}

const loginUser = () => (payload: any) => {
    return axios.post(`${BASE_URL}/api/v1/users/login`, payload)
}

const validateUserNameAndEmail = () => (payload : any) => {
    return axios.post(`${BASE_URL}/api/v1/users/userValidation`, payload)
} 

const resetPassword = () => (payload: any) => {
    return axios.post(`${BASE_URL}/api/v1/users/forgot-password`, payload, {
      withCredentials: true // This enables sending cookies with the request
    });
  };

export const userAPI = {
    registerUserAPI: registerUserAPI(),
    generateOTP: generateOTP(),
    loginUser: loginUser(),
    validateUserNameAndEmail: validateUserNameAndEmail(),
    resetPassword: resetPassword()
}