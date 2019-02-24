
import axios from 'axios';

import URL_API from '../../api';

const aniversariante_url = 'socios/aniversariantes';

export const Services = {
    getAniversariantes: () => {
         return axios.get(`${URL_API}${aniversariante_url}`, {});
     }
} 