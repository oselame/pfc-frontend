import { all } from 'redux-saga/effects';

import PartidaSagas  from './partida';
import RankingSagas from './ranking';


export default function* rootSaga() {
    return yield all([
        ...PartidaSagas,
        ...RankingSagas
    ])
}