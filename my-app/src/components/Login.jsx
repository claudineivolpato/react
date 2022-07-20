import React from "react";
import AuthServices from "../services/AuthServices";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            senha: ''
        }
    }

    sendLogin = async (event) => {
        event.preventDefault();
        let credenciais = {
            login: this.state.login,
            senha: this.state.senha
        }

        let res = await AuthServices.login(credenciais)
            AuthServices.setLoggedUser(res.data)

            this.props.history.push('/contacts')
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.sendLogin}>
                            <div className="form-group">
                                <label htmlFor="txtusuario">Login</label>
                                <input id="txtusuario"
                                    type="text"
                                    className="form-control"
                                    placeholder="Login"
                                    value={this.state.login}
                                    onChange={e => this.setState({ login: e.target.value })}
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