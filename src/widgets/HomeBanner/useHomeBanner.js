import { Expo, gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {

  const main = useRef(null);
  const [active, setActive] = useState(0)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  const customSettings = {
    spaceBetween: 0,
    effect: 'fade',
    pagination: pagination,
    loop: true,
    autoplay: true,
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    onSlideChange: ((e) => setActive(e.realIndex))
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const overlay = self.selector(`.${style.overlay}`);
      // const banner_bg = self.selector(`.${style.banner_bg}`);
      // const bg = self.selector(`.${style.bg}`);
      // const stroke = self.selector(`.${style.stroke}`);
      // const banner_bg_img = self.selector(`.${style.banner_bg} img`);
      // const card1 = self.selector(`.${style.banner_card_one}`);
      // const card2 = self.selector(`.${style.banner_card_two}`);
      // const card3 = self.selector(`.${style.banner_card_three}`);
      // const round_item = self.selector(`.${style.round_item}`);
      // const track_progress = self.selector(`.${style.track_progress}`);

      // gsap.set([card1, card2, card3], { autoAlpha: 0, y: 50 })
      // gsap.set(round_item, { autoAlpha: 0, x: -10, scale: 0.8 })
      // gsap.set(track_progress, { scaleX: 0, transformOrigin: "left" })
      // gsap.set(fade, { autoAlpha: 0, y: 100 })
      // gsap.set(banner_bg, { maskSize: "100%" })
      // gsap.set(bg, { autoAlpha: 0 })
      // gsap.set(stroke, { autoAlpha: 0, scaleX: 1.3, xPercent: -20 })
      // gsap.set(banner_bg_img, { autoAlpha: 0, scale: 1.3 })
      // const tl = gsap.timeline({ repeat: 0, paused: true });
      // tl.to(fade, { autoAlpha: 1, y: 0, stagger: 0.13, duration: 1.5, ease: Expo.easeOut },)
      // tl.to(banner_bg, { maskSize: "100%", ease: Expo.easeOut, duration: 1.5 }, "<.5")
      // tl.to(banner_bg_img, { autoAlpha: 1, scale: 1, ease: Expo.easeOut, duration: 1.5 }, "<")
      // tl.to(stroke, { autoAlpha: 1, ease: Expo.easeOut, stagger: .1, duration: 1.5, xPercent: 0, scaleX: 1 }, "<.6")
      // tl.to(bg, { autoAlpha: 1 }, "<")
      // tl.to([card1, card2, card3], { autoAlpha: 1, y: 0, stagger: 0.2 }, "<.5")
      // tl.to(round_item, { autoAlpha: 1, x: 0, scale: 1, stagger: 0.2 }, "<.5")
      // tl.to(track_progress, { scaleX: 1, duration: 1 }, "<")
      //   .play(0);
    }, main);

    return () => {
      ctx.revert();
    };
  }, []);

  return {
    main,
    active,
    customSettings,
    pagination,
    setActive
  };
};
