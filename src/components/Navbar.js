import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">MVIE</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
