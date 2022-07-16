import axios from 'axios'

const BASE_URL = "https://appelaborata.herokuapp.com/cont"

class ContactService {
    getContacts() {
        return axios.get(BASE_URL);
    }

    async getContactByCodigo(codigo) {
        let URL = BASE_URL + '/' + codigo

        let contact = ''

        try {
            contact = await (await axios.get(URL)).data; // await para a execução e espera terminar o processamento
        } catch (error) {
            console.log(error)
        }
        return contact;
    }

    createContact(contato) {
        return axios.post(BASE_URL, contato);
    }

    deleteContact(codigo) {
        let URL = BASE_URL + '/' + codigo
        return axios.delete(URL);
    }

    udpateContact(contact) {
        let URL = BASE_URL + '/' + contact.codigo
        return axios.put(URL);
    }
}

export default new ContactService()