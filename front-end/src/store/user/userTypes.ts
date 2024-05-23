export const USER_REGISTERED_REQUEST = "USER_REGISTERED_REQUEST";
export const USER_REGISTERED_REJECT = "USER_REGISTERED_REJECT";
export const USER_REGISTERED_SUCCESS = "USER_REGISTERED_SUCCESS";

export const OTP_REQUEST = "OTP_REQUEST";
export const OTP_SUCCESS = "OTP_SUCCESS";
export const OTP_FAILED = "OTP_FAILED";


// Corrected type definition for user registration success
export type UserRegistrationSuccessAction = {
  type: typeof USER_REGISTERED_SUCCESS;
  userData: any; 
};

export type OTPAction = {
    type: typeof OTP_SUCCESS;
    OTP: number; 
};