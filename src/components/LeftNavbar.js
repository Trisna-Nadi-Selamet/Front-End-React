import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavbar() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <span>
              <i class="fas fa-home me-1"></i> Address{' '}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/foods">
            <span>
              <i class="fas fa-file me-1 "></i> Certificate{''}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/drinks">
            <span>
              <i class="fas fa-database me-1"></i> Api Web{' '}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <span>
              <i class="fas fa-user me-1"></i> Users{' '}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            <span>
              <i class="fas fa-tasks me-1"></i> Work{' '}
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default LeftNavbar;
