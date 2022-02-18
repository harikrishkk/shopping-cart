import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '@context/auth-context';

const Navbar = () => {
  const { isAuthenticated, login, signout } = useContext(AuthContext);
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">MVIE</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/users"> Users </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={signout} className="btn btn-link">
                Logout
              </button>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <button onClick={login} className="btn btn-link">
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
