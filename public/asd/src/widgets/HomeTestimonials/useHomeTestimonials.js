import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const useHomeTestimonials = ({ style }) => {
  const main = useRef();
  const customSettings = {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: false,
    centeredSlides: true,
    autoplay: true,
    modules: [Navigation, Autoplay],
    breakpoints:{
      640: {
        spaceBetween: 1.2,
      },
      768: {
        slidesPerView: 1.8,
      },
      },
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };

  return {
    main,
    customSettings,
  };
};

export default useHomeTestimonials;
