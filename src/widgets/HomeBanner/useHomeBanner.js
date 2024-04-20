"use client"
import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {

  const main = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          const line = self.selector(`.${style.line}`);
          const line_round = self.selector(`.${style.line_round}`);
          const line_path = self.selector(`.${style.line_path}`);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: line,
              pin: line,
              start: "center 50%",
              end: "400%",
              scrub: true,
              anticipatePin: 1,
            },
          });

          tl.to(line_round, {scale: 4})
          tl.to(line_path, {scaleX: 2,scaleY:0.7},"<")
          tl.to(line_path, {autoAlpha:0, duration: 0.5},"<")
        },
        // small
        "(max-width: 991.98px)": function () {
         
        },

      });

    }, main);
    return () => ctx.revert();
  }, []);



  // useGSAP(() => {
  //   const line = `.${style.line}`;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: line,
  //       pin:line,
  //       end: "200%",
  //       scrub: true,
  //       markers: true
  //     },
  //   });




  //   ScrollTrigger.matchMedia({
  //     "(min-width: 992px)": function () {

  //     },

  //     "(min-width: 600px) and (max-width: 959px)": function () {
  //       // The ScrollTriggers created inside these functions are segregated and get
  //       // reverted/killed when the media query doesn't match anymore. 
  //     },

  //     // small
  //     "(max-width: 599px)": function () {
  //       // The ScrollTriggers created inside these functions are segregated and get
  //       // reverted/killed when the media query doesn't match anymore. 
  //     },

  //     // all 
  //     "all": function () {

  //     }
  //   });


  // }, { scope: main });

  return {
    main,
  };
};
