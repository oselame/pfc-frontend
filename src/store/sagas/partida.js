import { call, put } from 'redux-saga/effects';

import { services } from '../services';
import { Creators as PartidaActions } from '../actions/partida';

export function* getPartidaRequest(action) {
    try {
        const partida = yield call(services.getUltimaPartida, action.partida);
        yield put(PartidaActions.listPartidaSuccess(partida));
    } catch (error) {
        console.log(error);
        yield put(PartidaActions.listPartidaFailure({}));
    }
}