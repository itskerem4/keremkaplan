import React from 'react'
import data from '../db'
function About() {
  return (
    <>
        <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                {data.about.map((about)=>{
                                    return (
                    <div className="about-img">
                        <img src={about.img} alt="Kerem Kaplan" className="img img-fluid rounded-3"/>
                    </div>
                    )})}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="about-content">
                        <h1 className="fs-1 fw-bold">About Me</h1>
                        {data.about.map((about)=>{
                                    return (
                                        <>
                                        <p className="fs-5 fw-normal">{about.body}</p>
                                        <div className="link">
                                            <a href={about.files} download>My Resume</a>
                                        </div>
                                        </>
                        )})}
        </div>
        </div>
        </div>
     </div>
    </section>
    
    </>
  )
}

export default About;