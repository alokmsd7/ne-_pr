// Topbar.js
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>Journeying through GenAI and LLMS</h2>
      </div>
      <div className="topbar-right">
        <button>Account</button>
        <button>Menu</button>
      </div>
    </div>
  );
};

export default Topbar;
