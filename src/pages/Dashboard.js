// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <p><strong>Modules:</strong> 5 Completed</p>
      <p><strong>Assignments:</strong> 10 Pending</p>
      <p><strong>Quizzes:</strong> 3 Upcoming</p>
    </div>
  );
}

export default Dashboard;
