import React from "react";
import style from './About.module.css'
export default function About() {
  return (
    <>
      <section className={`about ${style.about}`}>
        <div className={`container ${style.container}`}>
          <div className="row g-0">
            <div className={`col-12 col-md-6  ${style.bgabout} ${style.FAbout}`}>
              <div className="row text-white p-5 g-0">
                <div className="col-md-6">
                  <div className={`text-center ${style.numbers} d-flex flex-column justify-content-center align-items-center border-bottom border-end `}>
                    <span className={style.count}>956</span>
                    <h3>Training Programs</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`text-center ${style.numbers}  d-flex flex-column justify-content-center align-items-center border-bottom `}>
                    <span className={style.count}>5</span>
                    <h3>Clinics and Psychological Services</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`text-center ${style.numbers}  d-flex flex-column justify-content-center align-items-center border-end`}>
                    <span className={style.count}>10</span>
                    <h3>Institute Projects</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`text-center ${style.numbers}  d-flex flex-column justify-content-center align-items-center`}>
                    <span className={style.count}>132</span>
                    <h3>Success Stories</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.SAbout} col-12 col-md-6  ${style.bgorange} p-5`}>
              <div className="heading">
                <span className={`${style.about1} border-bottom pb-1 text-uppercase`}>
                  ABOUT
                </span>
                <h2 className="mt-2 text-white">A few Word About Us</h2>
                <p>
                  The Palestinian Institute for Childhood was founded in 2014 to
                  address the growing issue of children with developmental
                  difficulties, especially autism. Initially focused on
                  diagnostics and rehabilitation, it expanded to include
                  awareness, early detection, and integration into educational
                  settings. The institute collaborates with national
                  institutions to develop childhood programs in line with the
                  national strategy for early childhood.
                </p>
                <a
                  href="#"
                  className="text-capitalize bg-light rounded-pill d-flex"
                >
                  <span className={`icon text-white ${style.icon}`}>
                    <i className="fa-solid fa-eye" />
                  </span>
                  <div className={style.see}>see more </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
