export const Types = {
    LIST_PARTIDA_SUCCESS: 'LIST_PARTIDA_SUCCESS',
    LIST_PARTIDA_FAILURE: 'LIST_PARTIDA_FAILURE',

}

export const Creators = {

    listPartidaSuccess: (partida) => ({
        type: Types.LIST_PARTIDA_SUCCESS,
        partida
    }),
    listPartidaFailure: (partida) => ({
        type: Types.LIST_PARTIDA_FAILURE,
        partida
    })

} 

