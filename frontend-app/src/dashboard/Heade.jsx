import React from 'react';
import '../css/Framework.css';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import avatar from  '../assets/images/avatar.png'


function Heade() {
  return (

   <div className="content w-full">
    
     <div className="head bg-white p-15 between-flex">
    
        <div className="search p-relative">
      
   <form id="searchForm">
 
          <div className="form-group">
 
            <label htmlFor="searchKeyword"></label>
 
            <input 
              type="search" 
              className=" form-control p-10" 
              id="searchKeyword" 
              name="searchKeyword" 
              placeholder="Enter keyword" 
            />
 
          </div>
 
        </form>
 
        <div id="noResultsMessage" style={{ display: 'none', color: 'red' }}></div>
 
      </div>
 
      <div className="icons d-flex align-center">
 
        <span className="notification p-relative">
 
        <FontAwesomeIcon icon={faBell} />
 
        </span>
 
        <img src={avatar}  alt="Avatar" className="avatar" />
 
      </div>
 
    </div>

    </div>
  );
}

export default Heade;
