import { ADD_USER, DELETE_USER, FETCH_USERS } from "../actions/actionTypes";

const initialState = {
	reducerUsers: [
		// {
		// 	first_name: 130,
		// 	email: "Ayat",
		// },
		// {
		// 	first_name: 120,
		// 	email: "Sara",
		// }
		
	],
};
export default function (state = initialState, action) {
	switch (action.type) {
		
		case FETCH_USERS:
			return {
				...state,
				reducerUsers: [...action.payload],
			};
		// console.log(action);

		case ADD_USER:
			return {
				...state,
				reducerUsers: [...state.reducerUsers, action.payload],
			};

		case DELETE_USER:
			// create a new array off of the existing state
			let filterArray = state.reducerUsers.filter((user) => {
				if (user.email !== action.payload) {
					return user;
				}
			});
			return {
				...state,
				reducerUsers: filterArray,
			};

		default:
			return state;
	}
}
