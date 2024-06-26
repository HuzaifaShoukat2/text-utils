import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function NavbarProps(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Huzaifa {props.name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
            
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">Contact Us</Link>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
        </div>
      </div>
    </nav>
    </div>
  )
}
// Type of Props 
// Proptype:
NavbarProps.propTypes = {name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
    // Default Props
    NavbarProps.defaultProps ={
        name: "Huzaifa",
        about: "About Us"
    }