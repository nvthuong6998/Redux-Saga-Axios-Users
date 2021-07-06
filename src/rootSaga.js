import { all, call } from "@redux-saga/core/effects";
import userSaga from "./User/User.saga";

export default function* rootSaga(){
    yield all([
        userSaga(),
    ])
}