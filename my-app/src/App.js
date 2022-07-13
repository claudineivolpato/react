import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListContactComponent from './components/ListContactComponent';
import CreateContactComponent from './components/CreateContactComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <ListContactComponent />
      <CreateContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;