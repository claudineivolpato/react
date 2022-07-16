import React from "react";
import ContactService from "../services/ContactService";

class ListContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }

        this.addContact = this.addContact.bind(this);
    }

    componentDidMount() {
        ContactService.getContacts().then(res => {
            this.setState({ contacts: res.data })
        })
    }

    addContact() {
        this.props.history.push('/add-contact')
    }

    deleteContact(codigo) {
        this.props.history.push(`/delete-contact/${codigo}`)
    }

    updateContact(codigo) {
        this.props.history.push(`/update-contact/${codigo}`)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Contatos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addContact}>Novo Contato</button>
                </div>
                <hr />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map((contact, index) =>
                                    <tr key={index}>
                                        <td>{contact.codigo}</td>
                                        <td>{contact.nome}</td>
                                        <td>{contact.telefone}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteContact(contact.codigo)}>Excluir</button>
                                            <button className="btn btn-info" onClick={() => this.updateContact(contact.codigo)}>Alterar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListContactComponent;