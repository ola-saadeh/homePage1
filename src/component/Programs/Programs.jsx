import React, { useEffect, useState } from "react"; 
import style from "./Programs.module.css"

export default function Programs() {
    const [activeTabImages, setActiveTabImages] = useState([
        "images/prog4.jpg",
        "images/prog2.jpg",
        "images/prog3.jpg",
        "images/prog1.jpg",
      ]);
    
      const tabs = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'motion', label: 'Motion' },
        { id: 'ilustration', label: 'Ilustration' },
      ];
    
      const [activeTab, setActiveTab] = useState('all');
    
      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    
        // قم بتحديث activeTabImages بمعرفات الصور المتعلقة بالتاب الجديد
        if (tabId === "web") {
          setActiveTabImages(["images/prog4.jpg", "images/prog2.jpg"]);
        } else if (tabId === "motion") {
          setActiveTabImages(["images/prog3.jpg"]);
        } else if (tabId === "ilustration") {
          setActiveTabImages(["images/prog1.jpg"]);
        } else {
          // إذا كان التاب "all"، قم بإعادة تعيين activeTabImages إلى القيمة الافتراضية
          setActiveTabImages(["images/prog4.jpg", "images/prog2.jpg", "images/prog3.jpg", "images/prog1.jpg"]);
        }
      };
    
      return (
        <>
          <section className={style.work} id="work">
          <div className={style.container}>
              <div className={`${style.headingcontent}  m-auto position-relative`}>
                <span className="text-uppercase position-absolute">Programs</span>
                <h2 className="mb-5 text-capitalize">Institute Projects</h2>
              </div>
          <div className="nav nav-tabs justify-content-center border-0 mt-4">  
            <div className={`tabs ${style.tabs}  nav-item`}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`tab nav-link ${style.navlink} me-3 mb-2 ${tab.id === activeTab ? style.active  : ''}`}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            </div>
    
            <div className="row">
              {activeTabImages.map((image, index) => (
                <div key={index} className="col-md-6 col-lg-4 mt-3">
                  <div className={`images work-item ${style.workitem} position-relative`}>
                    <img className="w-100" src={image} alt={`Image ${index}`} />
                    <div className={`search-icon ${style.searchicon}`}>
                      <i className={`fas fa-search-plus ${style.bgorange} p-3 rounded-circle d-flex justify-content-center align-items-center position-absolute`} />
                    </div>
                    <div className={`${style.info} px-4 py-2 d-flex align-items-center bg-white justify-content-between px-2 rounded-bottom position-absolute`}>
                      <div className="description">
                        <h3>Autism Spectrum Disorder Fund</h3>
                        <p>Financial support for autistic children.</p>
                      </div>
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </>
      );
}


