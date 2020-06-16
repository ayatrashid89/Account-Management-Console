import {ADD_USER, DELETE_USER} from '../actions/actionTypes';

const initialState ={
    Users: [
        {
            id:1,
            userName:"ayat"
         },
        {
             id:2,
            userName:"Rashid"
        },
        {
             id:3,
            userName:"Mary"
        },
        {
             id:4,
            userName:"Jon"
        },
    ],
};
export default function (state = initialState, action){
switch (action.type) {
    case ADD_USER:
        return state;
    case DELETE_USER:
        //create a new array off of the existing state
        let filterArray = state.Users.filter((user) => {
            if (user.id != action.payload){
                return user;
        }
    });
    return {
        ...state,
        Users: filterArray,
    };
        
    default:
        return state;    
}
}