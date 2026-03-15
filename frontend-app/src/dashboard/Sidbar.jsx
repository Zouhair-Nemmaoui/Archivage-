import React from 'react';
import '../css/Framework.css';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faTable, faMagnifyingGlassChart, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Sidebar() {
  return (
    <div> 
    <Helmet>
    <title>Dashboard - Mon Application</title>
</Helmet>
    <div className="sidebar bg-white p-20 p-relative">
      <h3>Radio</h3>
      <ul>
        <li>
          <NavLink className="active d-flex align-center fs-14 c-black rad-6 p-10" to="/welcome">
            <FontAwesomeIcon icon={faChartSimple} /> 
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="d-flex align-center fs-14 c-black rad-6 p-10" to="/programmes">
            <FontAwesomeIcon icon={faTable} />
            <span>Programmes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="d-flex align-center fs-14 c-black rad-6 p-10" to="/Chart">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} />
            <span>Chart Graphie</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
