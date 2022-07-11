import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/cont"

class ListaService {
    getLista() {
        return axios.get(BASE_URL);
    }
}

export default new ListaService()