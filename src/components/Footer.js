import React from 'react'

function Footer() {
  return (
    <div className="mt-4 container-fluid bg-primary bg-gradient text-white" style={{minHeight: '30hv', marginTop:'20px'}}>
      <div className="row pt-4 text-center">
          <div className="col-lg-4 col-md-4 col-sm-12">
              <h4>Important Link</h4>
              <div className="d-flex flex-column mb-2">
                <a href="#" className="text-white p-1">About Us</a>
                <a href="#" className="text-white p-1">Our Posts</a>
                <a href="#" className="text-white p-1">Our Team</a>
                <a href="#" className="text-white p-1">Contact Us</a>
              </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 md-2">
              <h4>NewsLatter</h4>
                <div style={{minHeight:"8rem"}} className="d-flex flex-column justify-content-around">
                  <input type='text' className='form-control' placeholder='Subscribe to the NewsLatter' />
                  <button className='btn btn-dark'>Subscribe</button>
                </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
              <h4>Contact Address</h4>
              <div className="d-flex flex-column">
                <p><i className="px-1 fa-solid fa-location-arrow"></i>54 Hahagena Street</p>
                <p>Tel-Aviv City</p>
                <p>Israel</p>
              </div>
          </div>
          <div className="float-star d-flex flex-column border border-dark py-8">
            <p>© 2023 All Rights Reserved</p>
          </div>
      </div>
    </div>
    
  )
}

export default Footer
