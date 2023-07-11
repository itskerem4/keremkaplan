import React from 'react'
import {Link} from 'react-router-dom'
import data from '../db'
function Navbar() {

  return (

    <div>
         <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">   
        </div>
        <div className="container-fluid">
        {data.navbarhead.map((navbarhead)=>{
                                    return (
            <a className="navbar-brand fs-4 fw-semibold logo"><Link to={navbarhead.link}>{navbarhead.title}</Link></a>
            )})}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-5 fw-semibold ">
            {data.navbar.map((navbar)=>{
                                    return (
              <li className="nav-item">
                <a className="nav-link" aria-current="page"><Link to={navbar.link}>{navbar.title}</Link></a>
              </li>
              )})}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;