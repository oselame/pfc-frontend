import { Types } from '../actions/ranking';

 const INITIAL_STATE = {
     ranking: {
        nuAno: 2019,
        cdQuadrimestre: 1,
        socios: []
     }
}


 export default function rankings(state = INITIAL_STATE, action) {
    switch (action.type) {

        case Types.GET_RANKING_REQUEST:
            return {
                ...state,
                nuAno: action.payload.nuAno,
                cdQuadrimestre: action.payload.cdQuadrimestre
            };
        case Types.GET_RANKING_SUCCESS:
            return {
                ranking: action.payload.ranking
            };
         default:
            return state;
    }
}