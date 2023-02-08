import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { NavbarList } from './data';

function Navbar (): JSX.Element {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-logo"
      >
        <img
          src="/images/logo.svg"
          alt="young coders club logo"
        />
      </Link>
      <ul className="navbar-list">
        {NavbarList.map((item) => (
          <li
            className="navbar-list__item"
            key={item.id}
          >
            <Link
              to={item.href}
              className="navbar-list__item__self"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
