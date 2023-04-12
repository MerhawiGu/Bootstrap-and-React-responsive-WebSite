import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase p-4">Contact Us</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
          <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">FullName</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="timing" className="form-label">Select your country</label>
              <select className="form-select" id="timing">
                  <option defaultValue="">Country</option>
                  <option value="1">Canada</option>
                  <option value="2">USA</option>
                  <option value="3">Itali</option>
              </select>
              </div>
            <div className="md-3">
            <label htmlFor="query" className="form-label">Enter Your Massage</label>
              <textarea className="form-control" id="query" required></textarea>
            </div>
            <div className='d-grid p-4'>
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
