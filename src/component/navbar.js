import React from "react";
import "./navbar.css"
import headphonesLogo from '../assets/logo.png';
import SearchBar from "./searchIcon";



function Navbar() {
  return (
    <>
      <div className="navBar">
        <div className="Logo">
          <img className='logoImage' src={headphonesLogo} alt='logoImage'/>
        </div>
        <div className="searchBar">
          <SearchBar/>
        </div>
        <div>
          <button className="giveFeedBackBtn">Give Feedback</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
