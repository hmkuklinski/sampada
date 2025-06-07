
import './App.css';
import Home from './components/Home';
// import About from './components/About';
import Awards from './components/Awards';
import Community from './components/Community';
import CV from './components/CV';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Thesis from './components/Thesis';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
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
