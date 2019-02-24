import { Types } from '../actions/partida';

 const INITIAL_STATE = {
     partida: {
         dtPartida: '',
         deResultado: '',
         deBolamurcha: '',
         deBolacheia: '',
         sociostimea: [],
         sociostimeb: []
     }
}


 export default function partidas(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_PARTIDA_SUCCESS:
            return {
                partida: action.payload.partida
            };
       

         default:
            return state;
    }
}