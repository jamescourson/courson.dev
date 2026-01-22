import { HashRouter, Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Resources from './pages/resources/Resources';
import Resume from './pages/resume/Resume';

import './App.scss';


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
);

function App() {
  return (
    <HashRouter>
      <div id="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

