import { LOG_OUT_SUCCESS, LOG_OUT_ERROR, LOG_OUT } from "../../resources/typesOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case LOG_OUT_SUCCESS:
            return {...action.result, error: false, loading: false};
        case LOG_OUT_ERROR:
            return {error: action.result, loading: false};
        case LOG_OUT:
            return {error: undefined, loading: true}
        default:
            return state;
    }
}