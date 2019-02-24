import axios from 'axios';

import URL_API from '../../api';

const ultimaPartida_url = 'partidas/ultimaPartida';

export const Services = {
    getUltimaPartida: () => {
         return axios.get(`${URL_API}${ultimaPartida_url}`, {});
     }
} 