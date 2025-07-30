
import './App.css';
import Home from './components/Home/Home';
import Awards from './components/Awards/Awards';
import Community from './components/Community/Community';
import CV from './components/ThesisCV/CV';
import Projects from './components/Research/Projects';
import Publications from './components/Research/Publications';
import Thesis from './components/ThesisCV/Thesis';
import {Route, Routes} from "react-router-dom";
function App() {
    
  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
