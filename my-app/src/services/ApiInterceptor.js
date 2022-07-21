import axios from 'axios'
import AuthServices from './AuthServices';

const instance = axios.create({
    baseURL: "https://appelaborata.herokuapp.com",
    headers: {
        "Content-Type": "application-JSON"
    }
});

instance.interceptors.request.use((config) => {
    const token = AuthServices.getLoggedUser()
    if (token) {
        config.headers["auth"] = token
    }
    return config;
},(error) =>{
    return Promise.reject(error);
}
);


export default instance;