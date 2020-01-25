import React, { memo } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { routes } from '../../constants/routes';

import './styles.scss';

export default memo(() => {
  return (
    <div className="app-header">
      <div className="header-link-container">
        <NavLink to={routes.ROOT} className="header--nav-item home-icon">
          <FaHome size="1.5em" />
        </NavLink>
        <NavLink to={routes.PROJECTS} className="header--nav-item padded">
          Projects
        </NavLink>
        <NavLink to={routes.CONTACT} className="header--nav-item padded">
          Contact
        </NavLink>
        <NavLink to={routes.ABOUT} className="header--nav-item padded">
          About
        </NavLink>
      </div>
    </div>
  );
});
