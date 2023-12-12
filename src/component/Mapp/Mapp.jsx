import React from 'react'
import style from './Mapps.module.css';
export default function Mapp() {
  return (
    <>
    <div className={style.oka}>
<section className={`${style.map} position-relative`} id="for-last">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.1341015534895!2d35.218050475357785!3d32.22755551186369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce019107d110f%3A0x12ebfea4ddbb7ccb!2sAn-Najah%20National%20University!5e0!3m2!1sen!2s!4v1695661045696!5m2!1sen!2s"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" w-100"
        />
        <div className={`${style.container} container contact-p bg-dark py-2 position-absolute rounded-top`}>
          <div className={style.contactinfo}>
            <div className="row text-white">
              <div className="col-md-4">
                <div className={`${style.info} d-flex align-items-center justify-content-center justify-content-md-start mt-4 mt-md-0  p-3`}>
                  <i className="fas fa-phone border rounded-circle p-2 bg-white" />
                  <div className="ms-3">
                    <h3>Contact Number</h3>
                    <a href="tel:2352570-09" className="text-white">
                      2352570-09
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${style.info} d-flex align-items-center justify-content-center justify-content-md-start mt-4 mt-md-0  p-3`}>
                  <i className="fa-regular fa-envelope border rounded-circle p-2 bg-white" />
                  <div className="ms-3">
                    <h3>Email Address</h3>
                    <a href="to:acinajah@najah.edu" className="text-white">
                      acinajah@najah.edu
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${style.info} d-flex align-items-center justify-content-center justify-content-md-start mt-4 mt-md-0  p-3`}>
                  <i className="fa-solid fa-location-dot border rounded-circle p-2 bg-white" />
                  <div className="ms-3">
                    <h3>Locationr</h3>
                    <a href="#" className="text-white">
                      Nablus-Palestine
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
