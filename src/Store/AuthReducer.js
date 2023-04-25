import { GET_DATA_FAILED_ACTION, GET_DATA_SUCESS } from "./AuthAction";
const initialState = {
  Data: "",
};

export function AuthReducer(state = initialState, action) {
  if (action.type === GET_DATA_SUCESS) {
    return {
      ...state,
      Data: action.payload,
    };
  }
  if (action === GET_DATA_FAILED_ACTION) {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
}
