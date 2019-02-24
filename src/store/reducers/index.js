import { combineReducers } from 'redux';

import partidaReducer from './partida';
import rankingReducer from './ranking';

 export default combineReducers({
    partidaReducer,
    rankingReducer
});