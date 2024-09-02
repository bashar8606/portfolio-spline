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
    <section className={`sec-padding ${style.section}`} ref={main} id={id}>
      <div className="container">
        <div className={`text-center  ${style.title_wrap}`}>
          <p className="mb-0 h5">My Skills</p>
          <h2 className={`h1 ${style.title} fw-400`}>What I can do for you </h2>
        </div>

        <div className="row row-cols-lg-3 gy-4">
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
    title:"UI/UX Designing",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ut labore et dolore magna aliqua.",
    img:"/assets/images/icon-ui-fill.svg",
    tags:[
      {img:"",title:""},
      {img:"",title:""},
      {img:"",title:""},
    ]
  },{
    title:"Frontend Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ut labore et dolore magna aliqua.",
    img:"/assets/images/icon-frontend-fill.svg",
    tags:[
      {img:"",title:""},
      {img:"",title:""},
      {img:"",title:""},
    ]
  },{
    title:"Interactive Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ut labore et dolore magna aliqua.",
    img:"/assets/images/icon-inter-fill.svg",
    tags:[
      {img:"",title:""},
      {img:"",title:""},
      {img:"",title:""},
    ]
  },{
    title:"CMS Development",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ut labore et dolore magna aliqua.",
    img:"/assets/images/icon-cms-fill.svg",
    tags:[
      {img:"",title:""},
      {img:"",title:""},
      {img:"",title:""},
    ]
  },{
    title:"3d Design",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ut labore et dolore magna aliqua.",
    img:"/assets/images/icon-3d-fill.svg",
    tags:[
      {img:"",title:""},
      {img:"",title:""},
      {img:"",title:""},
    ]
  },
]