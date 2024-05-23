import {
  USER_REGISTERED_REQUEST,
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_REJECT,
  OTP_REQUEST,
  OTP_FAILED,
  OTP_SUCCESS,
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
