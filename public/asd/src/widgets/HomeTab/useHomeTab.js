
"use client"
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeTab = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        const tab_wrap = `.${style.tab_wrap}`;
        const content = `.${style.content}`;
        const tab_screen = `.${style.tab_screen}`;
        const video_sm = `.${style.video_sm}`;
        const items = gsap.utils.toArray(`.${style.item}`);
        const tab_item = gsap.utils.toArray(`.${style.tab_card_item}`);
        const card_wrap = gsap.utils.toArray(`.${style.tab_card}`);

        gsap.set(tab_wrap, { xPercent: -50, scale: 2.2 })
        gsap.set(content, { autoAlpha: 0, y: 50 })
        gsap.set(video_sm, { autoAlpha: 0, x: -50 })
        gsap.set(tab_item, { scale: 0.5, x: 0, y: 0, autoAlpha: 0, filter: `blur(10px)` })
        // autoAlpha: 0
        gsap.set(tab_item[0], { xPercent: 100, yPercent: 40 })
        gsap.set(tab_item[1], { xPercent: -42, yPercent: 70 })
        gsap.set(tab_item[2], { xPercent: 80, yPercent: -50 })
        gsap.set(tab_item[3], { xPercent: -50, yPercent: -50 })
        items?.map((item, i) => {
          gsap.set(item, { autoAlpha: 0, scale: .5, y: (((i + 1) * 10) + 20) })
        })
        gsap.set(tab_screen, { '--bs-aspect-ratio': '56%' })

        let tl = gsap
          .timeline({
            force3d: true,
            scrollTrigger: {
              trigger: main.current,
              pin: main.current,
              start: "top top",
              end: "200%",
              scrub: 0.5,
            },
          })
        tl.to(tab_wrap, { scale: 1 })
        tl.to(tab_screen, { '--bs-aspect-ratio': '77.46%' }, "<")
        tl.to(items, { autoAlpha: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.05 }, "<.1")
        tl.to(video_sm, { autoAlpha: 1, scale: 1, x: 0, duration: 0.3 }, "<")
        tl.to(tab_wrap, { xPercent: 0 })
        tl.to(content, { y: 0, autoAlpha: 1 }, "<")
        tl.addLabel("content", "<")


        tl.to(tab_item, { scale: 1, xPercent: 0, yPercent: 0, autoAlpha: 1, filter: `blur(0px)` }, 0.2)
        tl.to(card_wrap, { xPercent: -5 }, "content")
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
  }, { scope: main });

  return {
    main
  };
};
