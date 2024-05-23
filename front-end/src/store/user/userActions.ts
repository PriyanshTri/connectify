import {
  USER_REGISTERED_REQUEST,
  USER_REGISTERED_SUCCESS,
  USER_REGISTERED_REJECT,
} from "./userTypes"; 
import { userAPI } from "../../api/user-api";

export const registerUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: USER_REGISTERED_REQUEST });

  try {
    const response = await userAPI.registerUserAPI(data);
    if (response.status === 200) {
      dispatch({ type: USER_REGISTERED_SUCCESS, payload: response.data });
    } else {
      throw new Error("Registration failed");
    }
  } catch (error) {
    dispatch({ type: USER_REGISTERED_REJECT})
  }
}
