import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://desi-burger-default-rtdb.firebaseio.com'
});

export default instance;