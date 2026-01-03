import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';

import './App.scss';


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

