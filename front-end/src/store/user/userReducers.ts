import { USER_REGISTERED_REJECT, USER_REGISTERED_REQUEST, USER_REGISTERED_SUCCESS } from "./userTypes";

const initialState = {
  loading: false,
  userData: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_REGISTERED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTERED_REJECT:
      return {
        ...state,
        loading: false,
      };
    case USER_REGISTERED_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.userData
      };
    default:
      return state;
  }
};