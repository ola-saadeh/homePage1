import React from "react";
import style from './Activities.module.css'

export default function Activities() {
  return (
    <>
      <section className={`${style.resume} resume`} id="resume">
        <div className={`${style.container} container`}>
          <div className={`heading-content ${style.headingcontent} m-auto position-relative`}>
            <span className="text-uppercase position-absolute">Activities</span>
            <h2 className="mb-5 text-capitalize">recent activity</h2>
          </div>
          <div className={`${style.roww} row`}>
            <div className="col-md-6 mt-3">
              <div className={`${style.bioitem} ${style.wid80}`}>
                <div className={`${style.head} d-flex align-items-center position-relative`}>
                  <i className={`fa-solid fa-newspaper ${style.bgorange} rounded-circle p-3`} />
                  <h3 className="text-capitalize ps-3">News and activities</h3>
                </div>
                <div className={`${style.descrip} pt-4`}>
                  <div className={`${style.item} position-relative`}>
                    <span className={style.date}> 30 DEC, 2020</span>
                    <p className="pt-2">
                      The Palestinian Institute for Childhood at An-Najah
                      National University receives ISO 9001:2015 international
                      quality certification renewal.
                    </p>
                  </div>
                  <div className={`${style.item} position-relative`}>
                    <span className={style.date}>30 DEC, 2020</span>
                    <p className="pt-2">
                      Virtual Conference: 'Early Childhood Development in the
                      Era of COVID-19: Global and Local Perspectives
                    </p>
                  </div>
                  <div className={`${style.item} position-relative`}>
                    <span className={style.date}>18 DEC, 2020</span>
                    <p className="pt-2">Stop Child Violence.</p>
                  </div>
                  <div className={`${style.item} position-relative`}>
                    <span className={style.date}>13 DEC, 2020</span>
                    <p className="pt-2">
                      Rights of Children with Developmental Disabilities
                      Discussed at the Ministry of Education, Health, and Social
                      Development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className={`${style.bioitem} ${style.wid80}`}>
                <div className={`${style.head} d-flex align-items-center position-relative`}>
                  <i className={`fa-solid  fa-briefcase ${style.bgorange} rounded-circle p-3`}/>
                  <h3 className="text-capitalize ps-3">Advertisements</h3>
                </div>
                <div className={`${style.descrip} pt-4`}>
                  <div className={`${style.item} position-relative`}>
                    <h4 className="pt-1">
                      <span className={style.wightd}>
                        Training Course on Capacity Enhancement Program for
                        Institute Programs.
                      </span>
                    </h4>
                    <span className={style.date}>15 OCT, 2022</span>
                  </div>
                  <div className={`${style.item} position-relative`}>
                    <h4 className="pt-1">
                      <front-end className={style.wightd}>
                        Bingoz English offers a unique summer entertainment
                        program for English language learning.
                      </front-end>
                    </h4>
                    <span className={style.date}>May 2013 - January 2015</span>
                  </div>
                  <div className={`${style.item} position-relative`}>
                    <h4 className="pt-1">
                      <span className={style.wightd}>
                        International Conference on Early Childhood.
                      </span>
                    </h4>
                    <span className={style.date}>February 2015 - May 2016</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className={`${style.bioitem} ${style.wid80} position-relative`}>
                <img className=" pt-5" src="images/pci_najah.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
