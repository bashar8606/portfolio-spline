
"use client"
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeChoose = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  const { width } = useGetDeviceType();

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        const content_wrap = `.${style.content_wrap}`;
        const content_img = `.${style.content_img}`;
        const card = `.${style.card}`;
        const card_head = `.${style.card_head}`;
        const card_body = `.${style.card_body}`;
        const img1 = `.${style.img1}`;
        const img2 = `.${style.img2}`;
        const img3 = `.${style.img3}`;
        const pf_wrap = `.${style.pf_wrap}`;
        const pf_wrap_title = `.${style.pf_wrap} p`;
        const path1 = `.${style.path}`;
        const pf_sm = gsap.utils.toArray(`.${style.pf_sm}`);
        const c = gsap.utils.toArray(`.${style.c}`);
        const c3_item = gsap.utils.toArray(`.${style.c3_item}`);
        const content_item = gsap.utils.toArray(`.${style.content_item}`);
        // const card_wrap = gsap.utils.toArray(`.${style.tab_card}`);
        gsap.set(card_body, { yPercent: -50, autoAlpha: 0 })
        gsap.set(path1, { clipPath: "inset(100% 0% 0% 0%)" })
        gsap.set(img2, { yPercent: 100, autoAlpha: 0 })
        gsap.set(img3, { yPercent: 100, autoAlpha: 0, scale:0.8 })
        gsap.set(c3_item[0], {scale: 0.8})
        gsap.set(c3_item[1], {yPercent: 200,  autoAlpha: 0})
        gsap.set(c3_item[2], {scale: 0.9, objectPosition: "top", yPercent: 100, autoAlpha: 0})
        gsap.set(c[2], {backgroundColor:"#00a2f9"})
        gsap.set(c[3], { yPercent: 100, autoAlpha: 0, scale:0.6, xPercent: -100 })
        gsap.set(c[4], { yPercent: -100, autoAlpha: 0, scale:0.6, xPercent: 100 })
       
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
              end: "bottom 85%",
              // endTrigger:content_item[3],
              scrub: true,
            },
          })

        //animation 1
        
        
        //animation 2
        tl.to(content_img, { xPercent: 100, x: 0 })
        tl.addLabel("animation1", "<")
        tl.to(card, {width:"50%", boxShadow:" 0px 10px 60px 0px rgba(38, 45, 118, 0.08)", padding: 10},"animation1")
        tl.to(card_head, {'--bs-aspect-ratio':"50%", backgroundColor: "#00324B"},"animation1")
        tl.to(card_body, {'--bs-aspect-ratio':"75%", autoAlpha: 1, yPercent: 0},"animation1")
        tl.to(img1, { autoAlpha: 0, scale: 0.8, yPercent: -100},"animation1")
        tl.to(img2, { autoAlpha: 1, scale: 1, yPercent: 0},"animation1")
        tl.to(pf_wrap, { backgroundColor: "transparent", duration: 0.2},"animation1")
        tl.to(pf_wrap, { top: "24%", left: "3%"},"animation1")
        tl.to(pf_wrap_title, { scale: 0.8, autoAlpha: 0, duration: 0.2},"animation1")
        tl.to([pf_sm[2], pf_sm[3]], { scale: 0.4, autoAlpha: 0, duration: 0.2},"animation1")
        tl.to(pf_sm[0], { xPercent: 50},"animation1")
        tl.to(c3_item[0], { yPercent: -100, autoAlpha: 0},"animation1")
        tl.to(c3_item[1], { yPercent: 0, autoAlpha: 1},"animation1")
        tl.to(pf_sm[1], { xPercent: -13, yPercent: 135},"animation1")
        tl.to(path1, { clipPath: "inset(0% 0% 0% 0%)"},"animation1")
        tl.to([c[3], c[4]], { yPercent: 0,xPercent:0, autoAlpha: 1, scale: 1},"animation1")
        tl.to(c[0], { yPercent: 200, autoAlpha: 0, scale: 0.5 , xPercent: 50},"animation1")
        tl.to( c[1], { xPercent: -150, autoAlpha: 0, scale: 0.7},"animation1")
        tl.to(c[2], { yPercent: -100, backgroundColor: "#000", "--bs-aspect-ratio": "17%", width:"48%", top:"78%", left:"20%"},"animation1")
        //animation 3
        tl.to(content_img, { xPercent: 0, x: 0 })
        tl.addLabel("animation2", "<")
        tl.to(path1, { autoAlpha: 0},"animation2")
        tl.to(card, {width:"82%", padding: 0},"animation2")
        tl.to(card_head, {'--bs-aspect-ratio':"66%", backgroundColor: "#F4F7F4"},"animation2")
        tl.to(card_body, {'--bs-aspect-ratio':"0%", yPercent: -50, autoAlpha: 0},"animation2")
        tl.to(img2, { autoAlpha: 0, scale: 0.8, yPercent: -100,},"animation2")
        tl.to(img3, { autoAlpha: 1, yPercent: 0},"animation2")
        tl.to([pf_sm[0], pf_sm[1]], { scale: 0.4, autoAlpha: 0},"animation2")
        tl.to(c[2], {"--bs-aspect-ratio": "53%",backgroundColor:"#00a2f9", width:"49%", top:"40%", left:"60%" },"animation2")
        tl.to(c[3], { yPercent: 100, autoAlpha: 0, scale:0.6, xPercent: -100 },"animation2")
        tl.to(c[4], { yPercent: -100, autoAlpha: 0, scale:0.6, xPercent: 100 },"animation2")
        tl.to(c3_item[1], { yPercent: -100, autoAlpha: 0},"animation2")
        tl.to(c3_item[2], { yPercent: 0, autoAlpha: 1},"animation2")
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
  }, {dependencies: [width],  scope: main });

  return {
    main,
    width
  };
};
