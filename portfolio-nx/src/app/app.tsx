import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import MyWork from '../components/MyWork';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
      </Routes>
    </Router>
  );
};

export default App;