import React from 'react'
import data from '../db'
import {Link} from 'react-router-dom'
import '../js/script'
function Home() {
  
  return (
    <>
       <div className="home">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
            {data.home.map((home)=>{
              return (
                <div className="profile d-flex justify-content-center align-items-center">
                    <img src={home.image.img} className="img-fluid rounded-circle img"/>
                </div>
              )})}

            <div className="col-md-12 d-flex justify-content-center align-items-center">
              
                <div className="animation_text">
                    <h1>I am a
                      <span className={"typewrite"} data-period={"1500"} data-words='[ " Developer.", " Designer.", " Creator."]'></span>     </h1>
                  </div>
                  </div>
                  <div className=" d-flex justify-content-center align-items-center link">
                    <a className=" "><Link to="./About">About Me<i className="fa fa-arrow-right"></i></Link></a>
                  </div>
            <div className="icon d-flex justify-content-center align-items-center fs-4 mt-2">
            {data.home.map((home)=>{
              return (
                <>
                <a><Link to={home.icon.github.link}><i className={home.icon.github.icon}></i></Link></a>
                <a className='ms-2'><Link to={home.icon.linkedin.link}><i className={home.icon.linkedin.icon}></i></Link></a>
                <a className='ms-2'><Link to={home.icon.twitter.link}><i className={home.icon.twitter.icon}></i></Link></a>
                <a className='ms-2'><Link to={home.icon.instagram.link}><i className={home.icon.instagram.icon}></i></Link></a>
                </>
              )})}
              </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;