import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Introduction from './Introduction/Introduction';
import Room from './Room/Room';
import JoinRoom from './JoinRoom/JoinRoom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room" element={<Room />} />
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
