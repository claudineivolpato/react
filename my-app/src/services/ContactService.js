import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/cont"

class ContactService {
    getContacts() {
        return axios.get(BASE_URL);
    }

    createContact(contato) {
        return axios.post(BASE_URL, contato);
    }

    deleteContact(codigo) {
        let URL  = BASE_URL + '/' + codigo
        return axios.delete(URL);
    }
}

export default new ContactService()