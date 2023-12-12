import React from 'react'
import style from './Contacting.module.css'
export default function Contacting() {
  return (
    <>
    <div className={style.oka}>
     <section className={`${style.contact} position-relative py-5`}id="contactForms">
        <div className={`${style.container} position-relative`}>
          <div className={`${style.headingcontent} m-auto position-relative`} >
            <span className="text-uppercase position-absolute text-white border-white">
              CONTACT
            </span>
            <h2 className="text-capitalize text-white">Get in Touch</h2>
          </div>
          <p className="text-center w-75 m-auto mt-5 mb-5">My Availability </p>
          <div className="row w-75 m-auto" id="contactForm">
            <div className="col-md-6 mt-4">
              <input
                type="text"
                className="form-control bg-transparent border-0 border-bottom rounded-0"
                placeholder="Name"
              />
            </div>
            <div className="col-md-6 mt-4">
              <input
                type="email"
                className="form-control bg-transparent border-0 border-bottom rounded-0"
                placeholder="Email"
              />
            </div>
            <div className="col-12 mt-4">
              <input
                type="text"
                className="form-control bg-transparent border-0 border-bottom rounded-0"
                placeholder="Address"
              />
            </div>
            <div className="col-12 mt-4">
              <textarea
                className="form-control bg-transparent border-0 border-bottom rounded-0"
                placeholder="Message.."
                rows={5}
                defaultValue={""}
              />
            </div>

         

            <div className={` w-auto m-auto mt-4 mt-md-5`}>
              <a href="#" className={`${style.about} text-capitalize bg-light rounded-pill`}>
                <span className={`${style.icon} text-white px-1`}>
                  <i className="fa-regular fa-envelope" />
                </span > 
                <div className={style.see}>Send Message</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
