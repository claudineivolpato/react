import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListContactComponent from './components/ListContactComponent';
import CreateContactComponent from './components/CreateContactComponent';
import DeleteContactComponent from './components/DeleteContactComponent';

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
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;