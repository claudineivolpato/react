import axios from 'axios'
import AuthServices from './AuthServices';

const BASE_URL = "https://appelaborata.herokuapp.com/contatos"

class ContactService {
    getContacts() {

        let config = {
            headers: {
                auth: AuthServices.getLoggedUser()
            }
        }

        return axios.get(BASE_URL, config);
    }

    async getContactByCodigo(codigo) {

        let config = {
            headers: {
                auth: AuthServices.getLoggedUser()
            }
        }
        let URL = BASE_URL + '/' + codigo

        let contact = ''

        try {
            contact = await (await axios.get(URL,config)).data; // await para a execução e espera terminar o processamento
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
        let URL = BASE_URL + '/' + contact.codigo;
        return axios.put(URL, contact)
    }
}

export default new ContactService()