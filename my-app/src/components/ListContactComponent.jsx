import React from "react";
import ContactService from "../services/ContactService";

class ListContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        ContactService.getContacts().then(res => {
            this.setState({ contacts: res.data })
            //console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Contatos</h2>
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
                                this.state.contacts.map(contact =>
                                    <tr key={contact.id}>
                                        <td>{contact.codigo}</td>
                                        <td>{contact.nome}</td>
                                        <td>{contact.telefone}</td>
                                        <td>Ações</td>
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