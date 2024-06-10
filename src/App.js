// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Skills from './screens/Skills';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Skills />
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
