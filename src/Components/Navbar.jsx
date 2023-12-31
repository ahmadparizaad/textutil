import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      
  <div className={`container-fluid text-${props.mode==='light'?'dark' : 'light'}`}>
    <a to="#"><h2>{props.title}</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-2" aria-current="page" to="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" to="/about">{props.aboutText}</a>
        </li>
        
      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
      </form> */}

{/* <div class="btn-group mx-3" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" >Blue</button>
  <button type="button" class="btn btn-primary" >Crimson</button>
  <button type="button" class="btn btn-primary">Green</button>
</div> */}

      <div className={`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
      </div>

    </div>
  </div>
</nav> 
  )
}

Navbar.protoTypes = {
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}  

Navbar.defaultProps = {
  title:'Add title here',
  aboutText:'About'
}
export default Navbar