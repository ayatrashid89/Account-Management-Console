import {ADD_USER, DELETE_USER} from "./actionTypes";

export function deleteUser(userId) {
    return function (dispatch){
        dispatch ({
            type: DELETE_USER,
            payload:userId,
        });
    };
}