import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import First from './component/First';
import Two from './component/Two';
import Three from './component/Three';
import Four from './component/Four';
import Five from './component/Five';
import Six from './component/Six';
import Seven from './component/Seven';
import Eight from './component/Eight';
import Nine from './component/Nine';
import Ten from './component/Ten';
import Eleven from './component/Eleven';
import Twoelve from './component/Twoelve';
import Thirteen from './component/Thirteen';
import Fourteen from './component/Fourteen';
import Fifteen from './component/Fifteen';

export default function App() {
  return (
    <Router>
      <Box sx={{ 
        backgroundColor: '#cfcfcf', 
        minHeight: '100vh',
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/First" element={<First />} />
          <Route path="/Two" element={<Two />} />
          <Route path="/Three" element={<Three />} />
          <Route path="/Four" element={<Four />} />
          <Route path="/Five" element={<Five />} />
          <Route path="/Six" element={<Six />} />
          <Route path="/Seven" element={<Seven />} />
          <Route path="/Eight" element={<Eight />} />
          <Route path="/Nine" element={<Nine />} />
          <Route path="/Ten" element={<Ten />} />
          <Route path="/Eleven" element={<Eleven />} />
          <Route path="/Twoelve" element={<Twoelve />} />
          <Route path="/Thirteen" element={<Thirteen />} />
          <Route path="/Fourteen" element={<Fourteen />} />
          <Route path="/Fifteen" element={<Fifteen />} />
        </Routes>
      </Box>
    </Router>
  );
}