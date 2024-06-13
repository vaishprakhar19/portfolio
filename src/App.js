import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Skills from './screens/Skills';
import Contact from './screens/Contact';
import Education from './screens/Education';
import Projects from './screens/Projects';

function App() {

  return (
    <div className="App">
      {/* <div className="sections-container"> */}
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      {/* </div> */}
    </div>
  );
}

export default App;
