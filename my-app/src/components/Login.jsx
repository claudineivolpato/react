import React from "react";
import AuthServices from "../services/AuthServices";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '',
            senha: ''
        }
    }

    sendLogin = (event) => {
        event.preventDefault();
        let credenciais = {
            usuario: this.state.usuario,
            senha: this.state.senha
        }

        AuthServices.login(credenciais)
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.sendLogin}>
                            <div className="form-group">
                                <label htmlFor="txtusuario">Usuário</label>
                                <input id="txtusuario"
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuário"
                                    value={this.state.usuario}
                                    onChange={e => this.setState({ usuario: e.target.value })}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtsenha">Senha</label>
                                <input id="txtsenha"
                                    type="password"
                                    className="form-control"
                                    placeholder="Senha"
                                    value={this.state.senha}
                                    onChange={e => this.setState({ senha: e.target.value })}
                                >
                                </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login