import './App.css';
import NavBar from "./components/NavBar";
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
