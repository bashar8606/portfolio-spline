"use client";
import Image from "next/image";
import style from "./HomeStrip.module.scss";
import { useHomeStrip } from "./useHomeStrip";
import Link from "next/link";
import { FaBehance } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const HomeStrip = ({ data }) => {
  const { main } = useHomeStrip({ style });

  return (
    <div className={`${style.strip} overflow-hidden`} ref={main}>
      <div className="container-fluid">
        <div className={`row flex-nowrap gx-lg-5 ${style.item_wrap}`}>
          {datas?.map((item, i) => {
            return (
              <div key={i} className={`${style.item} col-auto d-flex align-items-center`}>
                <div className={style.icon}>
                  <div className="ratio ratio-1x1">
                    <Image
                      src={item?.img}
                      fill
                      className="object-fit-cover"
                      alt="logo icon"
                    />
                  </div>
                </div>
                <p className="text-white fw-300 mb-0 ps-3">{item?.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeStrip;


const datas = [
  {
    title: "Interactive Development",
    img: "/assets/images/ii1.svg",
  }, {
    title: "CMS Development",
    img: "/assets/images/ii2.svg",
  }, {
    title: "3d Design",
    img: "/assets/images/ii3.svg",
  }, {
    title: "UI/UX Design",
    img: "/assets/images/ii4.svg",
  }, {
    title: "Frontend Development",
    img: "/assets/images/ii5.svg",
  },{
    title: "Interactive Development",
    img: "/assets/images/ii1.svg",
  }, {
    title: "CMS Development",
    img: "/assets/images/ii2.svg",
  }, {
    title: "3d Design",
    img: "/assets/images/ii3.svg",
  }, {
    title: "UI/UX Design",
    img: "/assets/images/ii4.svg",
  }, {
    title: "Frontend Development",
    img: "/assets/images/ii5.svg",
  },
]