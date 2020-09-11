import { all } from 'redux-saga/effects';
import login from './sagas/login';
import logout from './sagas/logout';
import register from './sagas/register';


export default function* rootSaga() {
    //All permite ejecutar todos lo watchers de todas las sagas que hayan
	yield all([
		login(),
		logout(),
		register()
	]);
};