import React from 'react';
//Components
import NavBar from './NavBar'
import Welcome from './Welcome'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="content-container">
        <Welcome />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
