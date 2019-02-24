import axios from 'axios';

import URL_API from '../../api';

const ranking_url = 'ranking/quadrimestre';

export const Services = {
    getRanking: ({nuAno, cdQuadrimestre}) => {
         return axios.get(`${URL_API}${ranking_url}?nuAno=${nuAno}&cdQuadrimestre=${cdQuadrimestre}`, {});
     }
} 