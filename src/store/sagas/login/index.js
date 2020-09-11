import { put, call, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from '../../../resources/typesOfActions';
import {apiCall} from '../../api';
import { POST } from '../../../resources/globalConstants';

function* getSessionToken({ payload }){
    try {
        const data = yield call(apiCall, POST, payload, 'http://localhost:8090/authenticate');
        localStorage.setItem("Authorization", data.token);
        localStorage.setItem("UserInSession", payload.username);
        localStorage.setItem("UserRole", data.user.role.name);
        yield put({type: LOG_IN_SUCCESS, result: data});
    } catch (error) {
        yield put({type: LOG_IN_ERROR, result: error});
    }
}

//Watchers
export default function* login(){
    //Cuando se ejecute la accion LOG_IN, ejecuta el getSessionToken
    //Yield es el que espera que si sea la accion para que la funcion generadora (function*) ejecute el codigo
    yield takeLatest(LOG_IN, getSessionToken);
}