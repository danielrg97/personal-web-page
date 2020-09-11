import { put, call, takeLatest } from 'redux-saga/effects';
import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from '../../../resources/typesOfActions';
import { apiCall } from '../../api';
import { POST } from '../../../resources/globalConstants';

function* registerUser({payload}){
    try {
        const data = yield call(apiCall, POST, payload, 'http://localhost:8090/create-user');
        yield put({type: REGISTER_SUCCESS});
    } catch (error) {
        yield put({type: REGISTER_ERROR, result: error});
    }
}

export default function* register(){
    yield takeLatest(REGISTER, registerUser);
}