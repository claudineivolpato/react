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

class Basicos extends React.Component {
  render() {
    return <div>
      <h2>Dados Basicos</h2>
      <Cadastros></Cadastros>
      <Cadastros></Cadastros>
      <Cadastros></Cadastros>
    </div>
  }
}

class Cadastros extends React.Component {
  render() {
    return <div>
      <p>Nome: </p>
      <p>Sobrenome: </p>
      <p>Idade: </p>
      <Enderecos></Enderecos>
    </div>
  }
}

class Enderecos extends React.Component {
  render() {
    return <div>
      <h4>Endereços</h4>
      <EnderecoResidencial></EnderecoResidencial>
      <EnderecoComercial></EnderecoComercial>
      <AreaAtuacao></AreaAtuacao>
    </div>
  }
}

class EnderecoResidencial extends React.Component {
  render() {
    return <h4>Endereço Residencial</h4>
  }
}

class EnderecoComercial extends React.Component {
  render() {
    return <h4>Endereço Comercial</h4>
  }
}

class AreaAtuacao extends React.Component {
  render() {
    return <h4>Area de Atuação</h4>
  }
}

root.render(
  <div>
    <CadastrosSimples></CadastrosSimples>
    <Basicos></Basicos>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
