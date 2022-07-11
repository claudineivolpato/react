import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Lista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: []
    }
  }

  componentDidMount() {   // executa antes de renderizar
    ListaService.getLista().then((res) => {
      this.setState({lista: res.data});
    })
  }

  render() {
    return (
      <div>
        <h2>Lista de Contatos</h2>
        <ul>
          {this.state.lista.map((contato) => <li key={contato.codigo}>{contato.codigo} - {contato.nome} - {contato.telefone}</li>)}
        </ul>
      </div>
    )
  }
}

root.render(
  <Lista />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
