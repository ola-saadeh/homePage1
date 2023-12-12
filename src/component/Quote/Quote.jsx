import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import style from "./Quote.module.css";
export default function Quote() {
  return (
    <>
      
     
      <section className={style.testimonials} id="testimonials">
        <div className={`${style.container} container`}>
          <div className={`${style.headingcontent} m-auto position-relative`}>
            <span className="text-uppercase position-absolute">
              testimonials
            </span>
            <h2 className="mb-5 text-capitalize">
              Quotes from the Second International Conference on Early Childhood
            </h2>
          </div>
          <OwlCarousel classname={`${style.owlcarousel} ${style.ola} ${style.owltheme} owl-carousel ola owl-theme`}>
            <div id="testimonial1" className={style.testimonial1}>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per1.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">josh feder</h6>
                <p className="text-capitalize pt-1">
                  child &amp; family psychiatry
                </p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className=" text-center text-capitalize">
                  At the Palestinian Child Institute where world-class
                  procedures are implemented, staff use cutty edge
                  parent-inediated intervention to help parents work with their
                  children so that they do not only lose skills but also make
                  developmental progress during COVID19.
                </p>
              </div>
            </div>
            <div className>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per4.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">siobhan fitzpatrick</h6>
                <p className="text-capitalize pt-1">early years</p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className="text-center text-capitalize">
                  The cost of division in Northern Ireland was £50 million per
                  year. The benefits of an ECD program that focused on
                  respecting difference and inclusion only cost £1,000 per
                  family
                </p>
              </div>
            </div>
            <div  id="testimonial2" className={style.testimonial2}>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per3.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">Ali shaar</h6>
                <p className="text-capitalize pt-1">
                  {" "}
                  Palestinian child institute
                </p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className="text-center text-capitalize">
                  We see a bright future for the children of Palestine. In every
                  challenge, there lies opportunity." By our working together
                  with action-oriented determination, "we can bring a smile back
                  to the faces of our children!
                </p>
              </div>
            </div>
            <div id="testimonial" className={style.testimonial}>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per2.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">rima salah</h6>
                <p className="text-capitalize pt-1">
                  early childhood peace consortium
                </p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className="text-center text-capitalize">
                  Sadly many children in our world do not receive adequate
                  nurturing care. This reality is compounded by the situations
                  of war, con-flict, and migration to which families are
                  exposed.
                </p>
              </div>
            </div>
            <div>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per5.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">chassan issa</h6>
                <p className="text-capitalize pt-1">
                  Arab resource collective /ANECD
                </p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className="text-center text-capitalize">
                  It is a human rights crisis where Health for All, Education
                  for All, Child Rights, and the right for dignity and values of
                  democracy are all jeopar-dized.
                </p>
              </div>
            </div>
            <div>
              <div className={`text-center ${style.ter}`}>
                <img src="images/per6.jpg" className={`rounded-circle ${style.tra}`} />
                <h6 className="text-uppercase pt-4">umayyah khammash</h6>
                <p className="text-capitalize pt-1">
                  juzoor for health &amp; Social Development
                </p>
              </div>
              <div className={`${style.quote} d-flex justify-content-center p-4`}>
                <i className="fa-sharp fa-solid fa-quote-left" />
                <p className="text-center text-capitalize">
                  ALL children must live in "dignity, development, and peace.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}
