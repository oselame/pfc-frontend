import { takeEvery, call, fork, put} from 'redux-saga/effects';
import { Types as rankingTypes } from '../actions/ranking';
import { Creators as rankingActions } from '../actions/ranking';
import { Services as rankingServices } from '../services/ranking';


function* getRankingAtual() {
    const nuAno = 2019;
    const cdQuadrimestre = 1;
    try {        
        const result = yield call(rankingServices.getRanking, {
            nuAno, cdQuadrimestre
        });
        console.log("saga.getRankingAtual",  result.data );
        
        yield put(rankingActions.getRankingSuccess(result.data));
    } catch (e) {
        console.log("erro", e);
    }
}

function* watchGetRankingAtualRequest() {
    yield takeEvery(rankingTypes.GET_RANKING_ATUAL_REQUEST, getRankingAtual);
}

function* getRanking(action) {
    const { nuAno, cdQuadrimestre } = action.payload;
    try {        
        const result = yield call(rankingServices.getRanking, {
            nuAno, cdQuadrimestre
        });
        console.log("saga.getRanking",  result.data );
        
        //yield put(partidaActions.getPartidaSuccess(result.data));
    } catch (e) {
        console.log("erro", e);
    }
}

function* watchGetRankingRequest() {
    yield takeEvery(rankingTypes.GET_RANKING_REQUEST, getRanking);
}

const rankingSagas = [
    fork(watchGetRankingAtualRequest),
    fork(watchGetRankingRequest)
];

export default rankingSagas;

