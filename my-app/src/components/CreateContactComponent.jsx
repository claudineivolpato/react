import React from "react";

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
    }

    contactList(){
        this.props.history.push('/')
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
                                    <input placeholder="Código" name="codigo" required className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input placeholder="Nome" name="nome" required className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Telefone</label>
                                    <input placeholder="Telefone" name="telefone" required className="form-control"></input>
                                </div>

                                <button className="btn btn-success">Salvar</button>
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