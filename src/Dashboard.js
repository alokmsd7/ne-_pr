// Dashboard.js
import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="workshop">
        <h2>Journeying through GenAI and LLMS</h2>
        <div className="details">
          <p>Domain: Bootcamp: Data Science</p>
          <p>Venue: Online, Zoom</p>
          <p>Date: 3-5 June, 2024 05:00 PM</p>
          <button className="past-workshops">Past Workshops</button>
          <button className="join-workshop">Join Workshop</button>
        </div>
      </div>
      <div className="exploring-careers">
        <h3>Block 1: Exploring Careers</h3>
        <div className="course">
          <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*cG6U1qstYDijh9bPL42e-Q.jpeg" alt="Machine Learning" />
          <div className="course-info">
            <h4>Introduction to Machine Learning</h4>
            <p>14 min | 24 bytes</p>
            <button>Start Exploring</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
