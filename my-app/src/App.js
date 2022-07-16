import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListContactComponent from './components/ListContactComponent';
import CreateContactComponent from './components/CreateContactComponent';
import DeleteContactComponent from './components/DeleteContactComponent';
import UpdateContactComponent from './components/UpdateContactComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path="/" exact component={ListContactComponent}></Route>
            <Route path="/add-contact" component={CreateContactComponent}></Route>
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