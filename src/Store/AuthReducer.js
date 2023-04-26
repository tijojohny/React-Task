import { GET_DATA_FAILED_ACTION, GET_DATA_SUCESS } from "./AuthAction";
const initialState = {
  auth: "",
};

export function AuthReducer(state = initialState, action) {
  if (action.type === GET_DATA_SUCESS) {
    return {
      ...state,
      auth: action.payload,
    };
  }
  if (action === GET_DATA_FAILED_ACTION) {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
  return state;
}
