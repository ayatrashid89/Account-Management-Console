import { ADD_USER, DELETE_USER, FETCH_USERS } from "./actionTypes";
import axios from "axios";

const url = "https://reqres.in/api/users";

export function fetchUsers() {
	return function (dispatch) {
		const getData = async () => {
			try {
				let res = await axios.get(url);
				console.log(res.data.data);
				dispatch({
					type: FETCH_USERS,
					payload: res.data.data,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	};
}

export function deleteUser(userId) {
	return function (dispatch) {
		dispatch({
			type: DELETE_USER,
			payload: userId,
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
