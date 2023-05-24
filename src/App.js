import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import About from './Pages/About';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/> */}
      <Home/>
    </div>
  );
}

export default App;
