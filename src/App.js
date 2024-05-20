import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Explore from './Explore';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
