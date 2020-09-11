import { LOG_IN, CLEAN_REDUCER } from "../../resources/typesOfActions";

export const loginAction = payload =>({ 
    type: LOG_IN,
    payload
});

export const cleanReducer = _ => ({
    type: CLEAN_REDUCER
})
