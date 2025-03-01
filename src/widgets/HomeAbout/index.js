"use client";
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";
import Link from "next/link";
import { FaBehance } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const HomeAbout = ({ data }) => {
  const { main } = useHomeAbout({ style });

  return (
    <>
      <section
        className={`${style.section} flex-column sec-padding d-flex align-items-center  `}
        ref={main}
      >
        {/* <div className={`ratio ratio-1x1 ${style.grad}`}></div> */}

        <div className={`ratio ${style.shapes} position-absolute top-0 start-50 `}>
          <Image
            src={`/assets/images/shapes.png`}
            fill
            className="object-fit-cover"
            alt="logo icon"
          />
        </div>



        <div className={`ratio ${style.portrait} mb-3 mb-lg-0`}>
          <Image
            src={`/assets/images/portrait2.png`}
            fill
            className="object-fit-cover"
            alt="logo icon"
          />
          <div>
            <div className={`position-absolute ${style.pointer} ${style.pointer_primary}`}>
              <div className={`${style.pointer_pill} title-sm fw-600 px-3 py-1 text-white rounded-pill text-nowrap`}>UI/UX Design</div>
            </div>

            <div className={`position-absolute ${style.pointer} ${style.pointer_secondary}`}>
              <div className={`${style.pointer_pill} title-sm fw-600 px-3 py-1 text-white rounded-pill text-nowrap`}>Development</div>
            </div>

            <div className={`position-absolute ${style.pointer} ${style.pointer_tertiary}`}>
              <div className={`${style.pointer_pill} title-sm fw-600 px-3 py-1 text-white rounded-pill text-nowrap`}>Motion Design</div>
            </div>
          </div>
        </div>
        <div className="container h-100 d-flex flex-column">
          <div className="row mt-auto">
            <div className={`col-lg-7 ${style.content_wrap} mb-5 mb-lg-0`}>
              <h2 className="h2 fw-700 mb-2">Hi, I&apos;m Bashar — Developer</h2>

              <h3 className={`fw-600 h3 mb-3 mb-lg-4  ${style.title_sm}`}>
                I enjoy creating products from scratch and improve existing ones.
                In simple terms, I design websites that make a profit or enhance
                business.
              </h3>
              <a href="/assets/images/Resume-Bashar-Developer.pdf" target="_blank" className="btn btn-secondary">Download CV</a>
            </div>

            <div className="col-lg-5 position-relative">

            </div>
          </div>
          <ul className={`mt-auto d-flex ${style.social}`}>

            <li className="me-3"><a href="https://app.spline.design/@ahammed.bashar9" target="_blank" className="d-inline-flex align-items-center lh-1 title-sm">
            <span className="me-2 d-inline-block" style={{width: '25px'}}>
              <div className="ratio ratio-1x1">
                <Image src="/assets/images/skills/icon2.png" fill className="object-fit-cover" alt=""/>
              </div>
              </span> Spline</a></li>
            <li className="me-3">    <a href="https://www.linkedin.com/in/ahammed-bashar/" target="_blank" className="d-inline-flex align-items-center lh-1 title-sm">
              <span className="me-2" style={{ color: "#132BFF" }}>
                <FaLinkedinIn />
              </span>
              Linkedin</a></li>
            <li className="me-3">   <a href="https://dribbble.com/Bhashar" target="_blank" className="d-inline-flex align-items-center lh-1 title-sm">
              <span className="me-2" style={{ color: "#FF0099" }}>
                <FaDribbble />
              </span>
              Dribbble</a></li>
            {/* <li className="me-3">   <a href="https://www.instagram.com/bashar_ahammed/" target="_blank" className="d-inline-flex align-items-center lh-1 title-sm">
              <span className="me-2" style={{ color: "#FF0099" }}>
                <FaInstagram />
              </span>
              Instagram</a></li> */}
            <li className="me-3">
              <a href="https://www.behance.net/ahammedbashar" className="d-inline-flex align-items-center lh-1 title-sm" target="_blank">
                <span className="me-2" style={{ color: "#1772FA" }}>
                  <FaBehance />
                </span>
                Behance</a></li>
          </ul>
        </div>
      </section>
     
    </>
  );
};

export default HomeAbout;
