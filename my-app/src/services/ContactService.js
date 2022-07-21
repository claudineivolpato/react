import api from './ApiInterceptor';

class ContactService {
    async getContacts() {
        try {
            return await api.get('/contatos');

        } catch (err) {
            return err.response.status
        }
    }

    async getContactByCodigo(codigo) {
        let contact = ''
        try {
            contact = await (await api.get('contatos/' + codigo)).data; // await para a execução e espera terminar o processamento
        } catch (error) {
            console.log(error)
        }
        return contact;
    }

    createContact(contato) {
        return api.post('contatos', contato);
    }

    deleteContact(codigo) {
        return api.delete('contatos/' + codigo);
    }

    udpateContact(contact) {
        return api.put('contatos/' + contact.codigo, contact)
    }
}

export default new ContactService()