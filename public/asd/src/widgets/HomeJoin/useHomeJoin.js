import { useLayoutEffect, useRef, useState } from "react";
import { Elastic, Expo, Power3, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeJoin = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const btnRef = useRef(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useGSAP((context, contextSafe) => {
    const card = `.${style.card}`;
    const app1 = `.${style.card_main_app}`
    const app2 = `.${style.card_main_app1}`
    const title = `.${style.title}`
    gsap.set(title, { scale: 1.4, letterSpacing: "23px", filter: `blur(5px)`, autoAlpha: 0 })
    gsap.set(app1, { rotate: -14, yPercent: 50, xPercent: 10, autoAlpha: 0 })
    gsap.set(app2, { rotate: -14, yPercent: -50, xPercent: -10, autoAlpha: 0 })
    gsap.to([app1, app2], { scrollTrigger: main.current, duration: 1.8, autoAlpha: 1, ease: Power4.easeInOut, scale: 1, rotate: -14, yPercent: 0, xPercent: 0 });
    gsap.to(card, { '--clip': "0%", scrollTrigger: main.current, ease: Power4.easeInOut, autoAlpha: 1, duration: 1.8 })
    gsap.to(title, { scrollTrigger: main.current, scale: 1, letterSpacing: "1px", autoRound: false, filter: `blur(0px)`, autoAlpha: 1, ease: Expo.easeOut, duration: 1.8 })

    const onClickActive = contextSafe(() => {
      gsap.to([app1, app2], { scale: 1.1 });
    });

    const onClickNormal = contextSafe(() => {
      gsap.to([app1, app2], { scale: 1 });
    });

    btnRef.current.addEventListener("mousedown", onClickActive);
    btnRef.current.addEventListener("click", handleShow);
    btnRef.current.addEventListener("mouseup", onClickNormal);
    return () => {
      btnRef.current.removeEventListener("mousedown", onClickActive);
      btnRef.current.removeEventListener("mouseup", onClickNormal);
    };
  }, { scope: main, revertOnUpdate: true });

  return {
    main,
    btnRef,
    show,
    handleClose
  };
};
