import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import { useSoundOnClick, useSoundOnEnter } from './SoundEffects.js'

import './Site.css';

import Home from './Pages/Home.js'
import About from './Pages/About';
import Links from './Pages/Links';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import DarkModeToggle from './DarkModeToggle.js'
import MuteToggle from "./MuteToggle.js";

// Sound effect attacher component
function SoundEffectAttacher({ muted }) {
  const location = useLocation();

  // Pass location to listen for route changes
  useSoundOnClick("btn-menu-sounds", "sfx/click2.wav", muted, location);
  useSoundOnEnter("btn-menu-sounds", "sfx/enter.wav", muted, location);
  
  return null;
}

export default function App() {

  // Dark mode functionality
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = (darkMode ? 'dark-mode' : 'light-mode')
  }, [darkMode]);
  
  // Mute functionality
  const [muted, setMuted] = useState(false);

  return (
    <Router >
      <SoundEffectAttacher muted={muted} />

      <div className='centered-container'>
        {/* Dark Mode Toggle Button */}
        <div className='button-group-meta'>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
          <MuteToggle muted={muted} setMuted={setMuted} />
        </div>

        {/* Setting routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<Links />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}
