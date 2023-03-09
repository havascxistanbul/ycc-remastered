import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { NavbarList } from './data';
import { Logo } from '../../components';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-logo"
      >
        <Logo />
      </Link>
      <ul className="navbar-list">
        {NavbarList.map((item, index) => (
          <li
            className="navbar-list__item"
            key={index}
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
