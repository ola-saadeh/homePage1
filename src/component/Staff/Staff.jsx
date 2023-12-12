import React, { useEffect } from "react";
import style from "./Staff.module.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
 // Create a component for each staff member
function StaffMember({ name, career, image }) {
  return (
    <div className={`${style.sz} col-sm-6 mt-5 pt-3 text-center`}>
        <div className={style.staffMember}>
        <div className={style.imageWrapper}>
        <img src={image} className="rounded-circle" alt={name} /></div>
        <h3 className={style.myname}>{name}</h3>
        <p className={style.myname}>{career}</p>
      
      </div>
    </div>
  );
}
export default function Staff() {
  const staffMembers = [
    {
      name: "Ali shaar",
      career: "Institute of Palestinian Childhood Director",
      image: "images/o1.jpg",
    },
    {
      name: "Imad Al-Khalili",
      career: "Administrative Assistant",
      image: "images/o2.jpg",
    },
    {
      name: "Farah Drouza",
      career: "Program Director/Clinical Psychologist",
      image: "images/o3.jpg",
    },
    {
      name: "Nirmen Habbaybeh",
      career: "Director of Early Childhood Programs/Montessori Nursery Al-Najah",
      image: "images/o4.jpg",
    },
    {
      name: "Bashair Abu Khadijah",
      career: "Director of Rehabilitation Programs/Occupational Therapist",
      image: "images/o5.jpg",
    },
    {
      name: "Huda Muheisen",
      career: "Training Coordinator",
      image: "images/o6.jpg",
    },
    {
      name: "Majda Al-Baytar",
      career: "Projects Coordinator",
      image: "images/o7.jpg",
    },
    {
      name: "Dina Qadoumi",
      career: "Public Relations Manager",
      image: "images/o8.jpg",
    },
    // Add more staff members as needed
  ];


  const owlCarouselOptions = {
    items: 3, // Change the number of items you want to display at once
    loop: true,
    autoplay: true, // Enable auto-play
    autoplayTimeout: 3000, // Set auto-play timeout in milliseconds (e.g., 3000ms = 3 seconds)
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1 // Number of items to display on small screens
      },
      768: {
        items: 2 // Number of items to display on medium screens
      },
      992: {
        items: 3 // Number of items to display on large screens
      }
    }
  };

 
 
  return (
    <>
     
      <section className={`${style.cv} position-relative py-5`} id="cv">
        <div className={style.container}>
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-capitalize">The institute's staff</h2>
            </div>
            <div className="col-md-8">
              < OwlCarousel className={`row owl-carousel ${style.owlcarousel} ${style.aloosh} ${style.owltheme}owl-theme`}{...owlCarouselOptions}>
               
              {staffMembers.map((member, index) => (
                <StaffMember key={index} {...member} />
              ))}

              </ OwlCarousel>
            </div>
          </div>
        </div>

      </section>
      
    </>
  );
}
