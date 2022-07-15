import React from "react";
import ContactService from "../services/ContactService";

class CreateContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //id: this.props.match.params.id,
            id: '',
            codigo: '',
            nome: '',
            telefone: ''
        }

        this.contactList = this.contactList.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    contactList() {
        this.props.history.push('/')
    }

    changeCodigo = (event) => {
        this.setState({ codigo: event.target.value })
    }

    changeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    changeTelefone = (event) => {
        this.setState({ telefone: event.target.value })
    }

    saveContact = (e) => {
        e.preventDefault();
        let contato = {
            codigo : this.state.codigo,
            nome : this.state.nome,
            telefone : this.state.codigo
        }
        ContactService.createContact(contato).then(res =>{
            alert(res.data)
            this.setState({ codigo: '' })
            this.setState({ nome: '' })
            this.setState({ telefone: '' })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Cadastro de Contatos</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Código</label>
                                    <input placeholder="Código" name="codigo" required className="form-control"
                                        value={this.state.codigo} onChange={this.changeCodigo}></input>
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

                                <button className="btn btn-success" onClick={this.saveContact}>Salvar</button>
                                <button className="btn btn-secondary" onClick={this.contactList}>Cancelar</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateContactComponent;