import { takeEvery, call, fork, put} from 'redux-saga/effects';
import { Types as partidaTypes } from '../actions/partida';
import { Creators as partidaActions } from '../actions/partida';
import { Services as partidaServices } from '../services/partida';


function* getPartidas() {
    try {        
        const result = yield call(partidaServices.getUltimaPartida);
        console.log( result.data );
        
        yield put(partidaActions.getPartidaSuccess(result.data));
    } catch (e) {
        console.log("erro", e);
    }
}

function* watchGetPartidaRequest() {
    yield takeEvery(partidaTypes.GET_PARTIDA_REQUEST, getPartidas);
}

const partidaSagas = [
    fork(watchGetPartidaRequest)
];

export default partidaSagas;

