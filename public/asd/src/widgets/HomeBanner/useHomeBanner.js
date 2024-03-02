import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const grid_item = self.selector(`.${style.grid_item}`);
      const grid_item_img = self.selector(`.${style.grid_item} img`)
      const title = self.selector(`.${style.title}`)
      const pf_item = gsap.utils.toArray(`.${style.pf_sm}`);

      pf_item?.map((item, i) => {
        gsap.set(item, { autoAlpha: 0, xPercent: -(i * 30) })
      })
      gsap.set(grid_item[0], { xPercent: 60, yPercent: 0 })
      gsap.set(grid_item[1], { xPercent: 30, yPercent: 0 })
      gsap.set(grid_item[2], { xPercent: 30, yPercent: 0 })
      gsap.set(grid_item[3], { xPercent: 0, yPercent: 0 })
      gsap.set(grid_item[4], { xPercent: -30, yPercent: 0 })
      gsap.set(grid_item[5], { xPercent: -30, yPercent: 0 })
      gsap.set(grid_item[6], { xPercent: -60, yPercent: 0 })

      gsap.set(grid_item, { '--clip': "10%", autoAlpha: 0 })
      gsap.set(grid_item_img, { scale: 0.6, yPercent: 20, autoAlpha: 0 })
      gsap.set(title, { scale: 0.8, letterSpacing: "15px", filter: `blur(5px)`, autoAlpha: 0 })

      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(title, { scale: 1, letterSpacing: "1px", autoRound: false, filter: `blur(0px)`, autoAlpha: 1, ease: Expo.easeOut, duration: 1.5 })
      tl.to(grid_item, { '--clip': "0%", xPercent: 0, stagger: { grid: [1, 5], from: 3, amount: 0.3 }, ease: Elastic.easeOut, autoAlpha: 1, duration: 1.8 }, "<.1")
      tl.to(grid_item_img, { stagger: { grid: [1, 5], from: 3, amount: 0.3 }, autoAlpha: 1, scale: 1, yPercent: 0, duration: 0.5, delay: 0.5 }, "<")
      tl.to(pf_item, { stagger: 0.03, ease: Expo.easeOut, autoAlpha: 1, xPercent: 0, duration: 1.5 }, "<")
        .play(0);

      // tl2.to(app3, { xPercent: 0, yPercent: 0 }, "<")

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          let tl2 = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, start: "bottom 80%", toggleActions:"play play play play"}})
          tl2.to(grid_item, { '--clip': "10%", })
          tl2.to(grid_item_img, { yPercent: 20 }, "<")
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

    return () => {
      ctx.revert();
    };
  }, [style]);

  return {
    main,
  };
};
