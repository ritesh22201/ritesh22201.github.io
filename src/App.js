import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import GithubCalender from './Components/GithubCalender';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/> */}
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubCalender/>
      <Contact />
    </div>
  );
}

export default App;
