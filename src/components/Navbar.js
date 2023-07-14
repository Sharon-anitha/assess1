import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({circle}) => {
    
  return (
    
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-heading">A2Z</h1>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
        <Link to="/task1" className="navbar-link">Task 1</Link>
        </li>
        <li className="navbar-item">
        <Link to={`/user/${circle}`} className="navbar-link"  >Task 2</Link>
        </li>
        <li className="navbar-item">
          <Link to="/task3" className="navbar-link">Task 3</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;