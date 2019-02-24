import { combineReducers } from 'redux';

import partidaReducer from './partida';
import rankingReducer from './ranking';
import quadrimestreReducer from './quadrimestre';
import aniversarianteReducer from './aniversariante';

 export default combineReducers({
    partidaReducer,
    rankingReducer,
    quadrimestreReducer,
    aniversarianteReducer
});