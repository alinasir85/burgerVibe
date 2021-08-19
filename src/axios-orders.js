import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgervibe-f52a7-default-rtdb.firebaseio.com/'
});

export default instance;