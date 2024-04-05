
"use client"
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeSkills = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  const { width } = useGetDeviceType();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          self.selector(`.${style.portrait}`);
          const content_wrap = self.selector(`.${style.content_wrap}`);
          const content_img = self.selector(`.${style.content_img}`);
          const toolbar = self.selector(`.${style.toolbar}`);
          const toolbar_body = self.selector(`.${style.toolbar_body}`);
          const icon_skill = self.selector(`.${style.icon_skill}`);
          // items?.map((item, i) => {
          //   gsap.set(item, { autoAlpha: 0, scale: .5, y: (((i + 1) * 10) + 20) })
          // })
          gsap.set(content_img, { x: 0 })
  
          let tl = gsap
            .timeline({
              force3d: true,
              scrollTrigger: {
                trigger: content_wrap,
                start: "top 20%",
                pin: content_img,
                markers: true,
                end: "bottom 85%",
                // markers: true,
                // endTrigger:content_item[3],
                scrub: true,
              },
            })
  
          
          //animation 2
          tl.to(content_img, { xPercent: 100, x: 0 })
          tl.addLabel("animation1", "<")
          tl.to(toolbar, { width: "30%", '--top': "75%" , '--left': "10%"}, "animation1");
          tl.to(toolbar_body, { '--bs-aspect-ratio': "75%", autoAlpha: 0 }, "animation1");
          tl.to(icon_skill[0], { '--top': "-10%" , '--left': "18%" }, "animation1");
          tl.to(icon_skill[1], { '--top': "-10%" , '--left': "18%" }, "animation1");
          tl.to(icon_skill[2], { autoAlpha: 0, yPercent: 100 }, "animation1");
          tl.to(icon_skill[3], { autoAlpha: 0, yPercent: 100 }, "animation1");
          tl.to(icon_skill[4], { autoAlpha: 0, xPercent: -100 }, "animation1");
          tl.to(icon_skill[5], { autoAlpha: 0, xPercent: -100 }, "animation1");
     



          //animation 3
          tl.to(content_img, { xPercent: 0, x: 0 })
          tl.addLabel("animation2", "<")
          tl.to(toolbar, { width: "26%", '--top': "80%" , '--left': "65%"}, "animation2");
          tl.to(toolbar_body, { '--bs-aspect-ratio': "125%", autoAlpha: 0 }, "animation2");
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
  }, []);

  return {
    main,
    width
  };
};
