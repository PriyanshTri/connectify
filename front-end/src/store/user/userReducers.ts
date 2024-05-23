import {
  OTP_FAILED,
  OTP_REQUEST,
  OTP_SUCCESS,
  USER_REGISTERED_REJECT,
  USER_REGISTERED_REQUEST,
  USER_REGISTERED_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  userData: null,
  otp: null
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_REGISTERED_REQUEST:
    case OTP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTERED_REJECT:
    case OTP_FAILED:
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
    default:
      return state;
  }
};
