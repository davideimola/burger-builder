import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-9e343.firebaseio.com/'
});

export default instance;