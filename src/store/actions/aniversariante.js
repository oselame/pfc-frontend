export const Types = {
    GET_ANIVERSARIANTE_REQUEST: 'aniversariante/get_aniversariante_request',
    GET_ANIVERSARIANTE_SUCCESS: 'aniversariante/get_aniversariante_success',

}

export const Creators = {

    getAniversarianteRequest: () => ({
        type: Types.GET_ANIVERSARIANTE_REQUEST
    }),

    getAniversarianteSuccess: (aniversariantes) => ({
        type: Types.GET_ANIVERSARIANTE_SUCCESS,
        payload: {
            aniversariantes
        }
    })

} 

