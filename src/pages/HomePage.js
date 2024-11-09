// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Swayam Course Management</h1>
        <div className="purple-line"></div>
      </header>
      <section className="info-section">
        <h2>Welcome to Swayam!</h2>
        <p>
          Swayam is an innovative platform for online learning and course management. 
          Our goal is to provide students with a seamless experience for enrolling in 
          courses, tracking performance, completing assignments, and achieving certifications.
        </p>
        <p>
          With a user-friendly interface, structured learning modules, and real-time 
          performance tracking, Swayam ensures a personalized and efficient educational 
          experience. Join us today to start your learning journey with diverse courses 
          and practical assignments that enhance your skills and knowledge.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
