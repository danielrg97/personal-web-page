import { put, call, takeLatest } from 'redux-saga/effects';
import { LOG_OUT_SUCCESS, LOG_OUT_ERROR, LOG_OUT } from '../../../resources/typesOfActions';
import {apiCall} from '../../api';
import { POST } from '../../../resources/globalConstants';

function* logoutUser(){
    try {
        const data = yield call(apiCall, POST, undefined, 'http://localhost:8090/log-out');
        localStorage.removeItem("Authorization");
        localStorage.removeItem("UserInSession");
        localStorage.removeItem("UserRole");
        yield put({type: LOG_OUT_SUCCESS, result: data});
    } catch (error) {
        yield put({type: LOG_OUT_ERROR, result: error});
    }
}

export default function* logout(){
    yield takeLatest(LOG_OUT, logoutUser);
}