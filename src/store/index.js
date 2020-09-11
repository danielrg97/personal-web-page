import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import loginReducer from './../components/Login/reducer';
import logoutReducer from './../template/user-in-session/reducer';
import registerReducer from './../components/Register/reducer';

const reducers = combineReducers({
    //TODO: agregar reducers de los componentes a conectar
   loginReducer, 
   logoutReducer,
   registerReducer
});
const sagaMiddleware = reduxSaga();
const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      )
);
sagaMiddleware.run(rootSaga);
export default store;