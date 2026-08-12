import { HashRouter, Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';

import './App.scss';


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
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

