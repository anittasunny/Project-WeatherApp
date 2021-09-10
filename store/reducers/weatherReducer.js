
import { GET_WEATHER, SET_ERROR } from "../types";

const initialstate = {
    data: null,
    error: '',
};

export default(state = initialstate, action) => {
    switch(action.type) {
        case GET_WEATHER:
            return{
                data: action.payload,
                error: '',
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.payload,

            };
        default:
            return state;        
    }
};

        