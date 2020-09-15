import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_IN, CLEAN_REDUCER } from "../../resources/typesOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN_SUCCESS:
            return {...action.result, error: false, loading: false};
        case LOG_IN_ERROR:
            return {error: action.result, loading: false};
        case LOG_IN:
            return {error: undefined, loading: true}
        case CLEAN_REDUCER:
            return {}
        default:
            return state;
    }
}