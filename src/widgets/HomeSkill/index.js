"use client";
import Slider from "@/components/Slider";
import style from "./HomeSkill.module.scss";
import useHomeSkill from "./useHomeSkill";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SpecCard from "@/components/SpecCard";

const HomeSkill = ({ id }) => {
  const { main, customSettings, width, show, handleClose, handleShow } =
    useHomeSkill({ style });

  return (
    <section className={`sec-padding ${style.section} pt-0`} ref={main} id={id}>
      <div className="container">
        <div className={`text-center  ${style.title_wrap}`}>
          <p className="mb-0 h5 text-white">My Skills</p>
          <h2 className={`h1 ${style.title} fw-400`}>What I can do for you </h2>
        </div>

        <div className={`row row-cols-lg-3 ${style.data_wrap}`}>
          {datas?.map((item, i)=>{
            return(
              <div key={i}>
                <SpecCard data={item}/>
              </div>
            )
          })}
        
        </div>

        {/* <div className={style.grid}>
          <div className={style.grid_item}>
            {/* <div className={style.card}>
              <span className={style.card_num}>01</span>
              <h3 className="h3 fw-700">User centric design with Figma</h3>
            </div> */}
          {/* </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
        </div>  */}
      </div>
    </section>
  );
};

export default HomeSkill;

const datas = [
  {
    title: "UI/UX Designing",
    description: "Creating intuitive and engaging user experiences through thoughtful interface design. Specializing in user research, wireframing, prototyping, and crafting pixel-perfect designs that balance aesthetics with functionality.",
    img: "/assets/images/icon-ui-fill.svg",
    tags: [
      {img: "/assets/images/icon-figma.png", title: "Figma"},
      {img: "/assets/images/icon-xd.png", title: "Adobe XD"},
    ]
  }, {
    title: "Frontend Development",
    description: "Building responsive and performant web applications using modern JavaScript frameworks. Focused on creating seamless user experiences with clean, maintainable code and optimal performance.",
    img: "/assets/images/icon-frontend-fill.svg",
    tags: [
      {img: "/assets/images/icon-react.png", title: "Next Js"},
      {img: "/assets/images/icon-react.png", title: "React Js"},
      {img: "/assets/images/icon-tailwind.png", title: "Tailwind"},
      {img: "/assets/images/icon-tailwind.png", title: "Bootrap"},
    ]
  }, {
    title: "Interactive Development",
    description: "Developing dynamic and engaging web experiences through advanced animations and interactive elements. Implementing smooth transitions and micro-interactions that enhance user engagement.",
    img: "/assets/images/icon-inter-fill.svg",
    tags: [
      {img: "/assets/images/icon-gsap.png", title: "GSAP"},
      {img: "/assets/images/icon-three.png", title: "Three JS"},
    ]
  }, {
    title: "CMS Development",
    description: "Implementing flexible content management solutions that empower clients to easily update and maintain their websites. Creating custom themes and plugins while ensuring security and performance.",
    img: "/assets/images/icon-cms-fill.svg",
    tags: [
      {img: "/assets/images/icon-strapi.png", title: "Strapi"},
      {img: "/assets/images/icon-tailwind.png", title: "Wordpress"},
    ]
  }, {
    title: "3D Design",
    description: "Creating immersive 3D experiences for the web using modern tools and technologies. Specializing in interactive 3D models, animations, and virtual environments that enhance user engagement.",
    img: "/assets/images/icon-3d-fill.svg",
    tags: [
      {img: "/assets/images/icon-spline.png", title: "Spline"},
      {img: "/assets/images/icon-three.png", title: "Three JS"},
    ]
  },
]