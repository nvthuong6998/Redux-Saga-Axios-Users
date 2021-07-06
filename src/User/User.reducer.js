import { GET_LIST_USER, GET_LIST_USER_SUCCESS } from "./User.type";

const initialState = {
    user: [],
    load: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_USER:
            return{
                load: true
            }
        case GET_LIST_USER_SUCCESS:
            return{
                user: action.user,
                load: false
            }

        default: 
        return state;
    }
}

export default userReducer