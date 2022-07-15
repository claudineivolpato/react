import React from "react";
import ContactService from "../services/ContactService";

class DeleteContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            codigo: this.props.match.params.codigo
        }
        this.contactList = this.contactList.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    contactList() {
        this.props.history.push('/')
    }

    async componentDidMount(){
        let contact = await ContactService.getContactByCodigo(this.state.codigo)
        this.setState({nome : contact.nome})
        this.setState({telefone : contact.telefone})
    }

    deleteContact = async(e) => {
        e.preventDefault()
        ContactService.deleteContact(this.state.codigo).then(res =>{
            alert(res.data)
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Exclusão de Contato</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Deseja excluir o contato?</label>
                                    <div>{this.state.codigo}</div>
                                </div>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <div>{this.state.nome}</div>
                                </div>
                                <div className="form-group">
                                    <label>Telefone</label>
                                    <div>{this.state.telefone}</div>
                                </div>

                                <button className="btn btn-danger" onClick={this.deleteContact}>Excluir</button>
                                <button className="btn btn-secondary" onClick={this.contactList}>Cancelar</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteContactComponent;