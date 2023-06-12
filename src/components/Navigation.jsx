import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_PATHS } from '../constants';

export default function Navigation() {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>WineFlix</h1>
        <ul className="navigation-links">
          <li className="active">
            <Link to={PAGE_PATHS.HOME}>Home</Link>
          </li>
          <li>
            <Link to={PAGE_PATHS.WHITES}>Whites</Link>
          </li>
          <li>
            <Link to={PAGE_PATHS.REDS}>Reds</Link>
          </li>
          <li>
            <Link to={PAGE_PATHS.BLENDS}>Blends</Link>
          </li>
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <Link to={PAGE_PATHS.PROFILE}>S</Link>
        </span>
      </section>
    </nav>
  );
};
