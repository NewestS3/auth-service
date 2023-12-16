import React from 'react';
import Login from './components/login/login';
import Homepage from "./components/homepage/homepage";
import Registration from "./components/registration/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
