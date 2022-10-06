import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" bg="primary">
        <div className='container'>
          <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
