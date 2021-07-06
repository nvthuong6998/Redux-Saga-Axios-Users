import { GET_LIST_USER, GET_LIST_USER_SUCCESS } from "./User.type";
import { takeEvery, takeLatest, call, all, put } from "@redux-saga/core/effects";
import axios from "axios";
import { getListUserSuccess } from "./User.action";

const url = 'https://jsonplaceholder.typicode.com/users';

function* getUser(){
    const reponse = yield axios.get(url);
    console.log(reponse);
    if(reponse.status == 200){
        console.log(reponse.status ,'cc')
        console.log(reponse.headers, 'cl')
        const user = reponse.headers;
        return user;
        // const user = reponse.user;
        // console.log(user , 'user')
        // return user;
    }
}

function* getListUserSaga(){
    try {
        const user = yield getUser();
        console.log('id ne', user);
        user.map(e => console.log(e.id))
        yield put({type: GET_LIST_USER_SUCCESS, user: user})
    } catch (error) {
        console.log(error)
    }
}

function* userSaga(){
    yield takeLatest(GET_LIST_USER, getListUserSaga)
}

export default userSaga;