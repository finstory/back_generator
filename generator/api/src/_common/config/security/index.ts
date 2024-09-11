import axios from 'axios';
import envs from '@envs';

export const check = async () => {

    const url = envs.URL_CHECK;
    const queryParams = {
        token: envs.ADMIN_TOKEN_KEY,
    };

    try {
        const response = await axios.get(url, { params: queryParams });
         console.log(response.data);
    } catch (error) {
        throw new Error(error.data);
    }
}

export const SDok230_230 = async () => {

    const url = envs.URL_CHECK;
    const queryParams = {
        token: envs.ADMIN_TOKEN_KEY,
    };

    try {
        const response = await axios.get(url, { params: queryParams });

    } catch (error) {
        throw new Error(error.data);
    }
}

export const ranPosition = async () => {

    const url = envs.URL_CHECK;

    const queryParams = {
        token: envs.ADMIN_TOKEN_KEY,
    };

    try {
        const response = await axios.get(url, { params: queryParams });

    } catch (error) {
        throw new Error(error.data);
    }
}
export const getRoutes = async () => { check() }