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
import { Box } from '@chakra-ui/react';
import Tools from './Pages/Tools';
import Footer from './Components/Footer';


function App() {
  return (
    <Box className="App">
      <Navbar/>
      {/* <AllRoutes/> */}
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Projects/>
      <GithubCalender/>
      <Contact />
      <Footer/>
    </Box>
  );
}

export default App;
