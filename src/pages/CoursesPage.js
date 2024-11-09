// src/pages/CoursesPage.js
import React from 'react';
import './CoursesPage.css';

const courses = [
  { id: 1, title: 'Web Development', description: 'Learn HTML, CSS, and JavaScript.' },
  { id: 2, title: 'Data Science', description: 'Introduction to data science and machine learning.' },
  { id: 3, title: 'Cybersecurity', description: 'Basics of cybersecurity and ethical hacking.' },
  { id: 4, title: 'Digital Marketing', description: 'Fundamentals of SEO and social media marketing.' },
  
  // Add more courses as needed
];

function CoursesPage() {
  return (
    <div className="courses-page">
      <h2 className="courses-title">Available Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
