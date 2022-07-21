import api from './ApiInterceptor';
//import axios from 'axios';

class AuthServices {

    login(credenciais) {
        //return axios.post('https://appelaborata.herokuapp.com/usuarios/login',credenciais)
        return api.post('usuarios/login',credenciais)
    }

    setLoggedUser(token_user) {
        localStorage.setItem('token_user', token_user)
    }

    getLoggedUser() {
        return localStorage.getItem('token_user');
    }
}

export default new AuthServices()