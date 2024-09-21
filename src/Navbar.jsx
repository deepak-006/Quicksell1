import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({onChangeView}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-button">
        <button className="display-btn" onClick={toggleDropdown}>
          Display
        </button>

        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={toggleDropdown}>
              <button className="dropdown-item" onClick={()=>onChangeView('Status')}>Tasks</button>
            </li>
            <li onClick={toggleDropdown}>
              <button className="dropdown-item" onClick={()=>onChangeView('Priority')}>Priority</button>
            </li>
          </ul>
        )} 
      </div>
    </nav>
  );
};

export default Navbar;