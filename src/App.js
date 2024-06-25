import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Skills from './screens/Skills';
import Contact from './screens/Contact';
import Education from './screens/Education';
import Projects from './screens/Projects';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
