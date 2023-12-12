import React from "react";
import style from './Service.module.css'

export default function Service() {
  return (
    <>
      <section className={style.service} id="service">
        <div className={`container ${style.container}`}>
          <div className={`m-auto position-relative ${style.headingcontent}`}>
            <span className="text-uppercase position-absolute">service</span>
            <h2 className="mb-5">Clinics!</h2>
          </div>
          <div className={`row ${style.roow}`}>
            <div className="col-md-6 col-lg-3">
              <div className={`item-service ${style.itemservice} text-center position-relative p-3`}>
                <img src="images/pic1.jpg" className="w-75 h-75" alt />
                <h3 className="text-capitalize py-4">
                  Psychological Diagnosis and Treatment Unit
                </h3>
                <p>
                  "The Palestinian Institute for Childhood provides therapy and
                  support for children with childhood disorders, helping them
                  integrate into schools."
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={`item-service ${style.itemservice} text-center position-relative p-3`}>
                <img src="images/pic2.jpeg" className="w-75 h-75" alt />
                <h3 className="text-capitalize py-4">Special Education Unit</h3>
                <p>
                  "This unit assesses and assists individuals with special
                  educational needs, providing tailored plans, specialized
                  resources,sensory training."
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={`item-service ${style.itemservice} text-center position-relative p-3`}>
                <img src="images/pic3.jpg" className="w-75 h-100" alt />
                <h3 className="text-capitalize py-4">
                  Speech and Language Unit
                </h3>
                <p>
                  This unit specializes in treating children with speech and
                  communication disorders, offering assessments and
                  rehabilitation for issues like language and communication
                  including those with autism
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className={`item-service ${style.itemservice} text-center position-relative p-3`}>
                <img src="images/pic4.webp" className="w-75 h-75" alt />
                <h3 className="text-capitalize py-4">
                  Occupational Therapy Unit
                </h3>
                <p>
                  This service assesses and treats children with various special
                  needs, improving their life skills and facilitating
                  integration into school and home activities through therapy
                  and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
