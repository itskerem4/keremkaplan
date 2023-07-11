import React from 'react'

function Contant() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="contant">
                    <h1 className="fs-1 fw-bold">Contant Me</h1>
                    <p className="fs-5 fw-semibold">
                        You can use the form below to contact me.
                    </p>
                    <form action="">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="mb-3 col-md-6 me-1">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name"/>
                        </div>
                        <div className="mb-3 col-md-6 ms-1">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email"/>
                        </div>
                    </div>
                        <div className="mb-3 col-md-12">
                            <label for="phone" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Enter Your Subject"/>
                        </div>
                        <div className="mb-3 col-md-12">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contant;