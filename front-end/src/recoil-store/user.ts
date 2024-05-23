import { atom, selector } from "recoil";
import { userAPI } from "../api/user-api";

export const registerUserData = atom({
  key: "registerUserData",
  default: {
    email: null,
    username: null,
    password: null,
  },
});

export const apiCallTrigger = atom({
  key: "apiCallTrigger",
  default: false,
});

export const userProfileSelector = selector({
  key: 'UserProfile',
  get: async ({ get }) => {
    debugger;
      const userData = get(registerUserData);
      const shouldMakeApiCall = get(apiCallTrigger); // Check the trigger atom
    
      if (!shouldMakeApiCall ||!userData) {      
        return {
          message: 'No user data available',
        };
      }

      // Perform the asynchronous API call here
      const response = await userAPI.registerUserAPI(userData);
      return response.data; // Assuming the API returns a JSON object
  },
});

