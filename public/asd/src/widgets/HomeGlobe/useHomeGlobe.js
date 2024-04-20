import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const useHomeGlobe = ({ style }) => {
  const main = useRef();
  const mainPin = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const circle1 = self.selector(`.${style.block_circle__one}`);
      const circle2 = self.selector(`.${style.block_circle__two}`);
      const circleGrad = self.selector(`.${style.block_circle__grad}`);
      const anim_elem = self.selector(`.${style.anim}`);
      const anim_elem1 = self.selector(`.${style.anim_in}`);
      const anim_hide = self.selector(`.${style.section1}`);
      const portrait = self.selector(`.${style.portrait}`);
      const icon = self.selector(`.${style.icon}`);
      
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          gsap.set(main.current,{clipPath: `circle(0%)`})
          // gsap.set(main.current,{clipPath: `circle(0%)`})
          gsap.set(circle1, { yPercent: -180, scale: 2, boxShadow: "rgb(255 255 255 / 40%) 0 09px 88px -26px" })
          gsap.set(circle2, { yPercent: 180, scale: 2, boxShadow: "rgb(3 254 148 / 20%) 0 -50px 88px -26px" })
          gsap.set(circleGrad, { scaleX: 1.6, scaleY: 1.2, xPercent: 0, yPercent: 9 })
          gsap.set(anim_elem, { autoAlpha: 0, scaleY: 1.05, scaleX: 1.15, filter: "blur(10px)" })
          gsap.set(icon, { autoAlpha: 0, scaleY: 1.05, scaleX: 1.15, filter: "blur(10px)" })
          gsap.set(mainPin.current, { "--bg-color": `#fff`, "--color": `#000`, })

          gsap.to(mainPin.current, {
            "--bg-color": `#000`,
            "--color": `#fff`,
            scrollTrigger: {
              start: "top -50%",
              toggleActions: "play none none reverse",
              trigger: main.current,
              once: false
            },
          });
          
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              scrub: true,
              pin: true,
              ease: "expo",
              end: "200%",
            },
          });
          // tl.to(main.current, {clipPath: `circle(100%)`})
          tl.to(main.current, {clipPath: `circle(100%)`, duration: 1},"<")
          tl.to(anim_elem1, {
            stagger: 0.03,
            autoAlpha: 0,
            scaleY: 0.95,
            scaleX: 1.02,
            filter: "blur(10px)",
            duration: 0.2
          }, ">.2");
          tl.to(anim_hide, {
            scale: 1,
          }, "<");
          tl.to(portrait, {
            scale: 0.9,
            transformOrigin:"bottom center"
          }, "<");
          tl.to(circle1, {
            yPercent: 0,
            scale: 0.8
          }, '<.1');
          tl.to(circle2, {
            yPercent: 0,
            scale: 0.8
          }, "<");
          tl.to(circleGrad, {
            xPercent: -14,
          }, "<");
          tl.to(circleGrad, {
            xPercent: 21,
            yPercent: 6,
          });
          tl.to(icon, {
            autoAlpha: 1,
            stagger: 0.05,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.2,
            scrollTrigger: {
              scrub: false,
            },
          }, "<");
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
  }, [mainPin, main, style]);

  return {
    main,
    mainPin
  };
};

export default useHomeGlobe;
