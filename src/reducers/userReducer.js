import { ADD_USER, DELETE_USER } from "../actions/actionTypes";

const initialState = {
	reducerUsers: [
		{
			id: 1,
			userName: "ayat",
		},
		{
			id: 2,
			userName: "Rashid",
		},
		{
			id: 3,
			userName: "Mary",
		},
		{
			id: 4,
			userName: "Jon",
		},
	],
};
export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				reducerUsers: [...state.reducerUsers, action.payload],
			};

		case DELETE_USER:
			// create a new array off of the existing state
			let filterArray = state.reducerUsers.filter((user) => {
				if (user.id !== action.payload) {
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
