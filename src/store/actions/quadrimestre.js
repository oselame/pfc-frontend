export const Types = {
    GET_YEAR_LIST_REQUEST: 'quadrimestre/get_year_list_request',
    GET_YEAR_LIST_SUCCESS: 'quadrimestre/get_year_list_success'
}

export const Creators = {

    getYearListRequest: () => ({
        type: Types.GET_YEAR_LIST_REQUEST
    }),

    getYearListSucess: (years) => {
        // console.log("getYearListSucess", years);
        return {
            type: Types.GET_YEAR_LIST_SUCCESS,
            payload: {
                years
            }
        }
    },

} 

