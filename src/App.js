// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Skills from './screens/Skills';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home id="home"/>
      <Skills id="skills" />
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
