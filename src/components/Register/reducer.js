import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER, CLEAN_REDUCER } from "../../resources/typesOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {error: false, loading: false};
        case REGISTER_ERROR:
            return {error: action.result, loading: false};
        case REGISTER:
            return {error: undefined, loading: true}
        case CLEAN_REDUCER:
            return {}
        default:
            return state;
    }
}