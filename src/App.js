import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage';
import Navbar from './components/navbar';
import Gallery from './pages/gallery';
import Mars from './pages/mars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import MWeather from './pages/marsweather';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/marsweather" element={<MWeather />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
