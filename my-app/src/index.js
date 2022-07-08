import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Cadastros extends React.Component {
  render() {
    return <h1>Lista de Cadastros</h1>
  }
}

class Basicos extends React.Component {
  render() {
    return <div>
      <h2>Dados Basicos</h2>
      
    </div>
  }
}

class Cadsatros extends React.Component {
  render() {
    return <h3>Item</h3>
  }
}

root.render(
  <div>
    <Cadastros></Cadastros>
    <Basicos></Basicos>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
