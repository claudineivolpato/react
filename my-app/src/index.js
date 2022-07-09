import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class CadastrosSimples extends React.Component {
  render() {
    return <h1>Lista de Cadastros</h1>
  }
}

class DadosBasicos extends React.Component {
  render() {
    return <div>
      <p>Nome:</p>
      <p>Sobrenome:</p>
      <p>Idade:</p>
    </div>
  }
}

class Endereco extends React.Component {
  render() {
    return <div>
      <h2>{this.props.tipo}</h2>
      <p>Logradouro:</p>
      <p>cep:</p>
    </div>
  }
}

class AreaAtuacao extends React.Component {
  render() {
    return <div>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
    </div>
  }
}

root.render(
  <div>
    <DadosBasicos></DadosBasicos>
    <Endereco tipo='Residencial'></Endereco>
    <Endereco tipo='Comercial'></Endereco>
    <AreaAtuacao title='Gerente Comercial' description='Descrição 001' ></AreaAtuacao>
    <AreaAtuacao title='Xpto 001' description='Descrição 002' ></AreaAtuacao>
    <AreaAtuacao title='Teste' description='Descrição 003' ></AreaAtuacao>

    {/* <Pesquisa></Pesquisa>
    <ListaProdutos></ListaProdutos> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
