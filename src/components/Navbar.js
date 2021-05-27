import React from 'react';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        <a className="navbar-brand" href="#">
          TrisnaDev
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-auto">
              <a className="new-link  active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="new nav-item ">
              <a className="new-link " href="About">
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="new-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PORTFOLIO
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Design Web
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Front End
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Back End
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
