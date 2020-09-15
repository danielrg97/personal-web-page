import { put, call, takeLatest } from 'redux-saga/effects';
import { LOG_OUT_SUCCESS, LOG_OUT_ERROR, LOG_OUT } from '../../../resources/typesOfActions';
import {apiCall} from '../../api';
import { POST } from '../../../resources/globalConstants';

function* logoutUser(){
    try {
        const data = yield call(apiCall, POST, undefined, 'http://localhost:8090/log-out');
        deleteToken()
        yield put({type: LOG_OUT_SUCCESS, result: data});
    } catch (error) {
        deleteToken();
        yield put({type: LOG_OUT_ERROR, result: error});
    }
}
const deleteToken = _ =>{
    localStorage.removeItem("Authorization");
    localStorage.removeItem("UserInSession");
    localStorage.removeItem("UserRole");
}

export default function* logout(){
    yield takeLatest(LOG_OUT, logoutUser);
}