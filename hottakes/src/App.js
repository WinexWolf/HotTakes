import logo from './logo.svg';
import './App.css';
import Navbar from './js/navbar.js';
import IndexPage from './js/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <IndexPage />
      </header>
    </div>
  );
}

export default App;
