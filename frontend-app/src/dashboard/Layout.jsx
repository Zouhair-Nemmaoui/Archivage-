// src/dashboard/Layout.jsx
import React from 'react';
import Sidebar from './Sidbar';
import Heade from './Heade';
const Layout = ({ children }) => {
  return (
    <div className="pages d-flex">

      <Sidebar />

      <div className="app-container content w-full" style={{ display: 'flex' }}>
      
        <div className="content w-full" style={{ marginLeft: '250px', width: '100%' }}>
      
          <Heade />
      
          {children}
      
        </div>
      </div>
    </div>
  );
};

export default Layout;
