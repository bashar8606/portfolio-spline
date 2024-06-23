import { useLayoutEffect, useRef } from "react";
import { Elastic, Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHomeSkill = ({ style }) => {
  const main = useRef();
  const { isDesktop, width } = useGetDeviceType();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const customSettings = {
    spaceBetween: 15,
    slidesPerView: 1.3,
    pagination: false,
    modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {

         
        },

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
        },

        // all 
        "all": function () {

        }
      });



    }, main);

    return () => ctx.revert();
  }, [width, style]);

  return {
    main,
    customSettings,
    width,
    show,
    handleClose,
    handleShow
  };
};

export default useHomeSkill;
