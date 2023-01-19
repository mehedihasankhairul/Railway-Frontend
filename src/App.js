import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import TrainInformation from './pages/TrainInformation/TrainInformation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="train-information/*" element={<TrainInformation />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
