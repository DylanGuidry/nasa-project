import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage';
import Mavbar from './components/mavbar';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <div className="App">
      <Mavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
