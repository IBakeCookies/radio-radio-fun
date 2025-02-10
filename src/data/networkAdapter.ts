import axios from 'axios';

export const networkAdapter = axios.create({
    timeout: 10000,
});
