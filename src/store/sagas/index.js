import { all } from 'redux-saga/effects';

import PartidaSagas  from './partida';
import RankingSagas from './ranking';
import QuadrimestreSagas from './quadrimestre';
import AniversarianteSagas from './aniversariante';


export default function* rootSaga() {
    return yield all([
        ...PartidaSagas,
        ...RankingSagas,
        ...QuadrimestreSagas,
        ...AniversarianteSagas
    ])
}