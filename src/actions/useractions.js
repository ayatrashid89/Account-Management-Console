import {ADD_USER, DELETE_USER} from "./actionTypes";

export function deleteUser(userId) {
    return function (dispatch){
        dispatch ({
            type: DELETE_USER,
            payload:userId,
        });
    };
}
export function addUser(userData) {
    return function (dispatch) {
      dispatch({
        type: ADD_USER,
        payload: userData,
      });
    };
  } 