import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });
export const useHomeAbout = ({ style }) => {

  const main = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const portrait = self.selector(`.${style.portrait}`);
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {


          gsap.set(main.current,{clipPath: `circle(0%)`})
          gsap.set(portrait,{yPercent: 20, scale:.8})

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              pin: true,
              start:"top top",
              end:"200%",
              scrub: .5,
              markers: true
            },
          });

          tl.to(portrait, {yPercent: 0, scale:1})
          tl.to(main.current, {clipPath: `circle(100%)`},"<")
          tl.to(main.current, {'--bg': `#000`,'--color':'#fff', duration:.3})
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
