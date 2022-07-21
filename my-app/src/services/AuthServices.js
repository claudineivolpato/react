import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/usuarios/login"

class AuthServices {

    login(credenciais) {
        return axios.post(BASE_URL, credenciais)
    }

    setLoggedUser(token_user) {
        localStorage.setItem('token_user', token_user)
    }

    getLoggedUser() {
        return localStorage.getItem('token_user');
    }
}

export default new AuthServices()