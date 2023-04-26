import { getData } from "./authService";

export const GET_DATA_SUCESS = "[data action] confirmed data";
export const GET_DATA_FAILED_ACTION = "[data action] failed data";

export function getDataAction() {
  console.log("1");
  return (dispatch) => {
    getData()
      .then((response) => {
        dispatch(getDataConfirmedAction(response.data));
      })
      .catch((error) => {
        dispatch(getDataFailedAction("Something went wrong"));
      });
  };
}

export function getDataConfirmedAction(data) {
  return {
    type: GET_DATA_SUCESS,
    payload: data,
  };
}

export function getDataFailedAction(error) {
  return {
    type: GET_DATA_FAILED_ACTION,
    payload: error,
  };
}
