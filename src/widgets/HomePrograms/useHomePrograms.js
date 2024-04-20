import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const useHomeFeatures = ({ style }) => {
  const main = useRef();

  
  useGSAP(() => {
    const glass = `.${style.glass}`;
    // const app1 = `.${style.card_main_app}`
    // const app2 = `.${style.card_main_app1}`
    // const app3 = `.${style.card_main_app2}`
    // // const content = `.${style.content}`;
    // // const tab_screen = `.${style.tab_screen}`;
    // // const video_sm = `.${style.video_sm}`;
    // // const items = gsap.utils.toArray(`.${style.item}`);
    // // const tab_item = gsap.utils.toArray(`.${style.tab_card_item}`);
    // // const card_wrap = gsap.utils.toArray(`.${style.tab_card}`);
    
    // gsap.set(glass, { backdropFilter: `blur(40px)` })

 

    let tl = gsap
      .timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: true,
          end: "top -20%",
        },
      })
      // tl.to(glass, { backdropFilter: `blur(0px)`, backgroundColor: `transparent` })
    //   tl2.to(app2, { yPercent: 0 },"<")
    //   tl2.to(app3, { xPercent: 0, yPercent: 0 },"<")

  }, { scope: main, revertOnUpdate: true });


  return {
    main
  };
};

export default useHomeFeatures;
