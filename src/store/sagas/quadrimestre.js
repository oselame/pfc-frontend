import { takeEvery, call, fork, put} from 'redux-saga/effects';
import { Types as quadrimestreTypes } from '../actions/quadrimestre';
import { Creators as quadrimestreActions } from '../actions/quadrimestre';
import { Services as quadrimestreServices } from '../services/quadrimestre';


function* getYearList() {
    try {        
        const result = yield call(quadrimestreServices.getYearList);
        console.log("saga.getYearList",  result.data );
        
        yield put(quadrimestreActions.getYearListSucess(result.data));
    } catch (e) {
        console.log("erro", e);
    }
}

function* watchGetYearListRequest() {
    yield takeEvery(quadrimestreTypes.GET_YEAR_LIST_REQUEST, getYearList);
}

const quadrimestreSagas = [
    fork(watchGetYearListRequest)
];

export default quadrimestreSagas;

