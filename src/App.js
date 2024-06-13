// import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
