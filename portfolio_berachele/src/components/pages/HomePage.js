import React from 'react';
//Styles
import '../../styles/HomePage.css'
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
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
