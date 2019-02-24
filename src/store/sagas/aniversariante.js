import { takeEvery, call, fork, put} from 'redux-saga/effects';
import { Types as aniversarianteTypes } from '../actions/aniversariante';
import { Creators as aniversarianteActions } from '../actions/aniversariante';
import { Services as aniversarianteServices } from '../services/aniversariante';


function* getAniversariantes() {
    try {        
        const result = yield call(aniversarianteServices.getAniversariantes);
        console.log("saga.getAniversariantes()", result.data );
        
        yield put(aniversarianteActions.getAniversarianteSuccess(result.data));
    } catch (e) {
        console.log("erro", e);
    }
}

function* watchGetAniversarianteRequest() {
    yield takeEvery(aniversarianteTypes.GET_ANIVERSARIANTE_REQUEST, getAniversariantes);
}

const aniversarianteSagas = [
    fork(watchGetAniversarianteRequest)
];

export default aniversarianteSagas;

