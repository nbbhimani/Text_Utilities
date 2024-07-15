import React from 'react'

import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.titel}</a>
        {/* <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.titel}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">{props.HomeTexts}</a>
              {/* <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">{props.HomeTexts}</Link> */}
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.AboutTexts}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}

// PropTypes

Navbar.propTypes = {
  titel: PropTypes.string.isRequired,
  HomeTexts: PropTypes.string.isRequired,
  AboutTexts: PropTypes.string.isRequired
}


// Default PropTypes   -- When we do not pass any Props from the App.js then below Default propes will be used

Navbar.defaultProps = {
  titel: 'Default Text_Utilities',
  HomeTexts: 'Default Home',
  AboutTexts: 'Default About Us',
};