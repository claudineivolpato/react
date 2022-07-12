import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Opa extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ativo: false }
    console.log(this.state);
  }

  componentDidMount() {  // executa antes de renderizar
    console.log(this.state.ativo);
  }

  render() {

    let className="h1";
    if(this.state.ativo == true){
      className += " ativo"
    } else {
      className += " inativo"
    }

    return (
      <div>
        <h1 className={className}>Opaaaa</h1>
        <button className="btn btn-primary" id='btnTeste'>Teste</button>
      </div>
    )
  }
}

root.render(
  <Opa />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
