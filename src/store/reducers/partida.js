import { Types } from '../actions/partida';

 const INITIAL_STATE = {
     partida: {}
}


 export default function lista(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LIST_PARTIDA_SUCCESS:
            return {
                ...INITIAL_STATE,
                partida: action.partida
            };
        case Types.LIST_PARTIDA_FAILURE:
            return {
                ...INITIAL_STATE,
                partida: action.partida
            };

         default:
            return state;
    }
}