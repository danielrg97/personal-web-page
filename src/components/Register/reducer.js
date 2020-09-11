import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER } from "../../resources/typesOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {error: false, loading: false};
        case REGISTER_ERROR:
            return {error: action.result, loading: false};
        case REGISTER:
            return {error: undefined, loading: true}
        default:
            return state;
    }
}