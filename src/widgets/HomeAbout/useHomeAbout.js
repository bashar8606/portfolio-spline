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
      const content_wrap = self.selector(`.${style.content_wrap}`);
      const pointer = self.selector(`.${style.pointer}`);
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {

          gsap.set(main.current,{clipPath: `circle(0%)`})
          gsap.set(portrait,{yPercent: 20, scale:.8, filter: `brightness(1) contrast(1)`})
          gsap.set(content_wrap,{xPercent: 20, autoAlpha: 0})
          gsap.set(pointer[0],{xPercent: 100,yPercent: -300})
          gsap.set(pointer[1],{xPercent: 100,yPercent: 20})
          gsap.set(pointer[2],{xPercent: -100})

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              pin: true,
              start:"top top",
              end:"200%",
              scrub: true,
            },
          });

          tl.to(portrait, {yPercent: 0, scale:1})
          tl.addLabel("start", "<")
          tl.to(main.current, {clipPath: `circle(100%)`},"<")
          tl.to(pointer, {xPercent: 0, yPercent: 0},"<")
          tl.to(content_wrap, {autoAlpha: 1, xPercent: 0})
          tl.to(portrait, {xPercent: 30},"<")


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
