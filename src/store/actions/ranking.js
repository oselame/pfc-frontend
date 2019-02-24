export const Types = {
    GET_RANKING_ATUAL_REQUEST: 'ranking/get_ranking_atual_request',
    GET_RANKING_REQUEST: 'ranking/get_ranking_request',
    GET_RANKING_SUCCESS: 'ranking/get_ranking_success',
}

export const Creators = {

    getRankingAtualRequest: () => ({
        type: Types.GET_RANKING_ATUAL_REQUEST
    }),

    getRankingRequest: (nuAno, cdQuadrimestre) => ({
        type: Types.GET_RANKING_REQUEST,
        payload: {
            nuAno: nuAno,
            cdQuadrimestre: cdQuadrimestre
        }
    }),

    getRankingSuccess: (ranking) => ({
        type: Types.GET_RANKING_SUCCESS,
        payload: {
            ranking
        }
    })

} 

