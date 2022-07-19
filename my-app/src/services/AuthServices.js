import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/contacts/login"

class AuthServices {
    
    login(credenciais) {
        axios.post(BASE_URL, credenciais).then(x =>{
            console.log(x.data)
        })
    }

}

export default new AuthServices()