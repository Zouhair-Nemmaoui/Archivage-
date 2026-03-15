import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './css/Framework.css';
import './css/style.css';
import Layout from './dashboard/Layout';
import Welcome from './dashboard/Welcome';
import Programmes from './dashboard/Programmes';
import Form from './dashboard/Form';
import Chart from './dashboard/Chart';


function App() {
  return (
    <Router>
      <Routes>
        {/* Standard-Route, die auf /welcome weiterleitet */}
      <Route path="/" element={<Navigate to="/welcome" />} />

        <Route path="/programmes" element={<Layout><Programmes /></Layout>} />
        <Route path="/welcome" element={<Layout><Welcome /></Layout>} />
        <Route path="/ajouter" element={<Layout><Form /></Layout>} />
       <Route path="/chart" element={<Layout><Chart /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;