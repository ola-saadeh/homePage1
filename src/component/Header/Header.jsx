import React, { useEffect, useState } from 'react'
import style from "./Header.module.css"
export default function Header() {
  const text1 = "نهدف الى تشخيص و تأهيل ودمج الأطفال ذوي الرعاية الخاصة في بيئة تعليمية مناسبة ";
  const text2 = "لتحسين جودة حياتهم";
  const emptyString = "&nbsp;".repeat(Math.max(text1.length, text2.length));
  const [direction, setDirection] = useState(1);
  let [i, setI] = useState(0);
  let [n, setN] = useState(0);
  let [typingText, setTypingText] = useState('');

  useEffect(() => {
    const interval = setInterval(function () {
      if (i >= 0) {
        setTypingText(emptyString.substring(0, text1.length - i) + text1.substring(i));
        setI(i - direction);
      } else {
        setDirection(1);
        setN(n === 0 ? 1 : 0);
        setTypingText(n === 0 ? text1 : text2);
        i = 0;
      }
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [i, n, direction]);

  return (
    <>
    <section  className={`header ${style.header}`} id="header">
  <div className={style.postionn} >
    <video className="w-100" playsInline autoPlay muted loop>
      <source src="images/homeVe.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={` ${style.overlay}`}  />
  </div>
  <div className={`position-relative ${style.container}`}>
    <div className={`header-content position-absolute text-end  ${style.headercontent}`}>
      <h2 className="text-capitalize">المعهد الفلسطيني للطفولة</h2>
      <h1 className="text-uppercase ">Palestinian Child Institute</h1>
      <p className="text-capitalize text-white" id="typeo"  dangerouslySetInnerHTML={{ __html: typingText }}></p>
      <ul className={`social-links d-flex ${style.sociallinks}`}>
        <li className="ms-3">
          <a href="#" className=" border d-flex justify-content-center align-items-center text-capitalize">Get Started now</a>
        </li>
        
      </ul>
    </div>
  </div>
</section>

    </>
  )
}
