import {
  EMAIL_VALIDATION_REJECT,
  EMAIL_VALIDATION_REQUEST,
  EMAIL_VALIDATION_SUCCESS,
  OTP_FAILED,
  OTP_REQUEST,
  OTP_SUCCESS,
  USER_LOGIN_REJECT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTERED_REJECT,
  USER_REGISTERED_REQUEST,
  USER_REGISTERED_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  userData: null,
  otp: null,
  loginUserData: null,
  validationMessages: null
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_REGISTERED_REQUEST:
    case OTP_REQUEST:
    case USER_LOGIN_REQUEST:
    case EMAIL_VALIDATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTERED_REJECT:
    case OTP_FAILED:
    case USER_LOGIN_REJECT:
    case EMAIL_VALIDATION_REJECT: 
      return {
        ...state,
        loading: false,
      };
    case USER_REGISTERED_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case OTP_SUCCESS : 
    return {
        ...state,
        loading: false,
        otp: action.payload,
    }

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginUserData: action.payload,
      }

    case EMAIL_VALIDATION_SUCCESS: 
    return {
      ...state,
      loading: false,
      validationMessages: action.payload,
    }
    default:
      return state;
  }
};
