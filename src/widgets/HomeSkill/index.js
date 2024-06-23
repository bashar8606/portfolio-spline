"use client";
import Slider from "@/components/Slider";
import style from "./HomeSkill.module.scss";
import useHomeSkill from "./useHomeSkill";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomeSkill = ({ id }) => {
  const { main, customSettings, width, show, handleClose, handleShow } =
    useHomeSkill({ style });

  return (
    <section className={`sec-padding ${style.section}`} ref={main} id={id}>
      <div className="container">
        <div className={`text-center mb-lg-5 ${style.title_wrap}`}>
          <p className="mb-0 h5">My Skills</p>
          <h2 className={`h1 ${style.title} fw-600`}>What I can do for you </h2>
        </div>

        <div className={style.grid}>
          <div className={style.grid_item}>
            {/* <div className={style.card}>
              <span className={style.card_num}>01</span>
              <h3 className="h3 fw-700">User centric design with Figma</h3>
            </div> */}
          </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
          <div className={style.grid_item}> </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkill;
