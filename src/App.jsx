import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Home, About, Projects, Resume } from './pages';

import './App.scss';


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
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

