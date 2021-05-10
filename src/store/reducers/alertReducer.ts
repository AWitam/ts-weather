import { AlertAction, AlertState, SET_ALERT } from "../types";

const initialState: AlertState = {
  message: "",
};

export const alertReducer = (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
