import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/cont"

class ContactService {
    getContacts() {
        return axios.get(BASE_URL);
    }
}

export default new ContactService()