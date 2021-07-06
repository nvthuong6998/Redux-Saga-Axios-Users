import { GET_LIST_USER, GET_LIST_USER_SUCCESS } from "./User.type";

const getListUser = () => {
    return{
        type: GET_LIST_USER,

    }
}

const getListUserSuccess = (listUser) => {
    return{
        type: GET_LIST_USER_SUCCESS,
        listUser
    }
}

export {getListUser, getListUserSuccess};