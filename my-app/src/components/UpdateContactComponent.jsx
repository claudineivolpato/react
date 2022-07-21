import React from "react";
import ContactService from "../services/ContactService";

class UpdateContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: this.props.match.params.codigo,
            nome: '',
            telefone: ''
        }
 
        this.contactList = this.contactList.bind(this);
        this.updateContact = this.updateContact.bind(this);
    }

    async componentDidMount() {
        let contact = await ContactService.getContactByCodigo(this.state.codigo)
        this.setState({ nome: contact.nome, telefone: contact.telefone })
    }

    contactList() {
        this.props.history.push('/contacts')
    }

    changeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    changeTelefone = (event) => {
        this.setState({ telefone: event.target.value })
    }

    updateContact = async (e) => {
        e.preventDefault();

        let contato = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            telefone: this.state.telefone
        }
        
        let res = await (await ContactService.udpateContact(contato)).data
        alert(res)
        this.contactList()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Alterar Contato</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Código</label>
                                    <div>{this.state.codigo}</div>
                                </div>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input placeholder="Nome" name="nome" required className="form-control"
                                        value={this.state.nome} onChange={this.changeNome}></input>
                                </div>
                                <div className="form-group">
                                    <label>Telefone</label>
                                    <input placeholder="Telefone" name="telefone" required className="form-control"
                                        value={this.state.telefone} onChange={this.changeTelefone}></input>
                                </div>

                                <button className="btn btn-success" onClick={this.updateContact}>Alterar</button>
                                <button className="btn btn-secondary" onClick={this.contactList}>Cancelar</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateContactComponent;