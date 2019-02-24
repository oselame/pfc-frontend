import axios from 'axios';

import URL_API from '../../api';

const quadrimestreAnos_url = 'quadrimestre/anos';

export const Services = {
    getYearList: () => {
         return axios.get(`${URL_API}${quadrimestreAnos_url}`, {});
     }
} 