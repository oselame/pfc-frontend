export const Types = {
    GET_PARTIDA_REQUEST: 'partida/get_partida_request',
    GET_PARTIDA_SUCCESS: 'partida/get_partida_success',

}

export const Creators = {

    getPartidaRequest: () => ({
        type: Types.GET_PARTIDA_REQUEST
    }),

    getPartidaSuccess: (partida) => ({
        type: Types.GET_PARTIDA_SUCCESS,
        payload: {
            partida
        }
    })

} 

