
import './App.css';
import Home from './components/Home/Home';
import Awards from './components/Awards/Awards';
import Community from './components/Community/Community';
import Projects from './components/Research/Projects';
import Publications from './components/Research/Publications';
import Thesis from './components/ThesisCV/Thesis';
import {Route, Routes} from "react-router-dom";
import Certs from './components/Awards/Certs';
function App() {
    
  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Publications />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/community" element={<Community />} />
          <Route path="/certifications" element={<Certs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
