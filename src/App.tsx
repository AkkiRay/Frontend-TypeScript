import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Avia.tsx';
import NotFound from './pages/NotFound.tsx';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/avia" />} />
        <Route exact path="/avia" element={<Home/>} />
        <Route path="/avia/info" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
