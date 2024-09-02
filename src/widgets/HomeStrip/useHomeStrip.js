import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });
export const useHomeStrip = ({ style }) => {
  const main = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const item_wrap = self.selector(`.${style.item_wrap}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          scrub: 1,
        },
      });

      tl.to(item_wrap, {xPercent: -10})



      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {


          

        },
        // small
        "(max-width: 991.98px)": function () {
         
        },

      });

    }, main);
    return () => ctx.revert();
  }, []);


  return {
    main,
  };
};
