//Sign Up
export const USER_REGISTERED_REQUEST = "USER_REGISTERED_REQUEST";
export const USER_REGISTERED_REJECT = "USER_REGISTERED_REJECT";
export const USER_REGISTERED_SUCCESS = "USER_REGISTERED_SUCCESS";

//Sending OTP
export const OTP_REQUEST = "OTP_REQUEST";
export const OTP_SUCCESS = "OTP_SUCCESS";
export const OTP_FAILED = "OTP_FAILED";

//Login User
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_REJECT = "USER_LOGIN_REJECT";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

//Email and UserName Validation.
export const EMAIL_VALIDATION_REQUEST = "EMAIL_VALIDATION_REQUEST";
export const EMAIL_VALIDATION_SUCCESS = "EMAIL_VALIDATION_SUCCESS";
export const EMAIL_VALIDATION_REJECT = "EMAIL_VALIDATION_REJECT";

// Corrected type definition for user registration success
export type UserRegistrationSuccessAction = {
  type: typeof USER_REGISTERED_SUCCESS;
  userData: any; 
};

export type UserLoginSuccessAction = {
  type: typeof USER_LOGIN_SUCCESS;
  loginUserData: any; 
};

export type OTPAction = {
    type: typeof OTP_SUCCESS;
    OTP: number; 
};