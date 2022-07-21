import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListContactComponent from './components/ListContactComponent';
import CreateContactComponent from './components/CreateContactComponent';
import DeleteContactComponent from './components/DeleteContactComponent';
import UpdateContactComponent from './components/UpdateContactComponent';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import AuthServices from './services/AuthServices';

function App() {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    let token_user = AuthServices.getLoggedUser()
    if (token_user)
      setAuth(true)
    else
      setAuth(false)
  })

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/contacts" component={ListContactComponent}></Route>
            <Route path="/add-contact" >
              {auth ? <CreateContactComponent /> : <Login />}
            </Route>
            <Route path="/delete-contact/:codigo" component={DeleteContactComponent}></Route>
            <Route path="/update-contact/:codigo" component={UpdateContactComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;