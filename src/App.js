import './css/App.css';
import Topbar from './components/Navbar';
import Site from './components/Site';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Topbar/>
       <Site/>
      </header>
    </div>
  );
}

export default App;
