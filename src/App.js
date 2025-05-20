import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './Site.css';

import Home from './Pages/Home.js'
import About from './Pages/About';
import Links from './Pages/Links';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import DarkModeToggle from './DarkModeToggle.js'

function App() {

  // Dark mode functionality
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = (darkMode ? 'dark-mode' : 'light-mode')
  }, [darkMode]);
  

  return (
    <Router basename="/personal-site">
      <div className='centered-container'>
        {/* Dark Mode Toggle Button */}
        <div className='darkmode-toggle-position'>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
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

export default App;
