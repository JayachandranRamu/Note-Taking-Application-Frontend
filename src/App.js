import logo from './logo.svg';
import './App.css';
import MainRoute from './Route/MainRoute';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;
