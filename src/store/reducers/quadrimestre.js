import { Types } from '../actions/quadrimestre';

 const INITIAL_STATE = {
     quadrimestre: {
        years: [],
     }
}


 export default function quadrimestres(state = INITIAL_STATE, action) {
    try {
        // console.log("GET_YEAR_LIST_SUCCESS", action.payload)
    } catch (error) {
        
    }

    switch (action.type) {
        case Types.GET_YEAR_LIST_REQUEST:
            return {
                ...state,
                years: []
            };
        case Types.GET_YEAR_LIST_SUCCESS:
            return {
                ...state,
                years: action.payload.years
            };
         default:
            return state;
    }
}