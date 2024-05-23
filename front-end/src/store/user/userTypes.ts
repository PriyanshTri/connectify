export const USER_REGISTERED_REQUEST = "USER_REGISTERED_REQUEST";
export const USER_REGISTERED_REJECT = "USER_REGISTERED_REJECT";
export const USER_REGISTERED_SUCCESS = "USER_REGISTERED_SUCCESS";

// Corrected type definition for user registration success
export type UserRegistrationSuccessAction = {
  type: typeof USER_REGISTERED_SUCCESS;
  userData: any; 
};
