import { Types } from '../actions/aniversariante';

 const INITIAL_STATE = {
    aniversariantes: []
}


 export default function partidas(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_ANIVERSARIANTE_SUCCESS:
            return {
                aniversariantes: action.payload.aniversariantes
            };
       

         default:
            return state;
    }
}