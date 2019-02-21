import { takeLatest, all } from 'redux-saga/effects';

import { Types as PartidaTypes } from '../actions/partida';
import { getPartidaRequest } from './partida';

export default function* rootSaga() {
    return yield all([
        takeLatest(PartidaTypes.LIST_PARTIDA_SUCCESS, getPartidaRequest)
    ])
}