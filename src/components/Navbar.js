import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: 'auto',
  };
  const listStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  };
  return (
    <div className="nav-bar">
      <header style={navStyle}>
        <h1>Math Magician</h1>
        <ul style={listStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
