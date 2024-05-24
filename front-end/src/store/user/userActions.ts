import {
  USER_REGISTERED_REQUEST,
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_REJECT,
  OTP_REQUEST,
  OTP_FAILED,
  OTP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REJECT,
  USER_LOGIN_SUCCESS,
  EMAIL_VALIDATION_REQUEST,
  EMAIL_VALIDATION_SUCCESS,
  EMAIL_VALIDATION_REJECT,
} from "./userTypes"; 
import { userAPI } from "../../api/user-api";

export const registerUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: USER_REGISTERED_REQUEST });

  try {
    const response = await userAPI.registerUserAPI(data);
    if (response.status === 200) {
      dispatch({ type: USER_REGISTERED_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: USER_REGISTERED_REJECT})
    }
  } catch (error) {
    dispatch({ type: USER_REGISTERED_REJECT})
  }
}

export const generateOTPForEmails = (data: any) => async (dispatch: any) => {
  dispatch({ type: OTP_REQUEST});

  try {
    const response = await userAPI.generateOTP(data);
    if (response.status === 200) {
      dispatch({ type: OTP_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: OTP_FAILED})
    }
  } catch (error) {
    dispatch({ type: OTP_FAILED})
  }
}

export const loginUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: USER_LOGIN_REQUEST});

  try {
    const response = await userAPI.loginUser(data);
    if (response.status === 200) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: USER_LOGIN_REJECT})
    }
  } catch (error) {
    dispatch({ type: USER_LOGIN_REJECT})
  }
}

export const validateUserNameAndEmail = (data: any) => async (dispatch: any) => {
  dispatch({ type: EMAIL_VALIDATION_REQUEST});

  try {
    const response = await userAPI.validateUserNameAndEmail(data);
    if (response.status === 200) {
      dispatch({ type: EMAIL_VALIDATION_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: EMAIL_VALIDATION_REJECT})
    }
  } catch (error) {
    dispatch({ type: EMAIL_VALIDATION_REJECT})
  }
}