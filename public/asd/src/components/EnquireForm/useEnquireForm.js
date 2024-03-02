
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as Yup from 'yup';
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useEnquireForm = (style) => {


  const { isDesktop, width } = useGetDeviceType();

  const contactUs = async (values, actions) => {
    try {
      const res = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      console.log("res", await res.json());
      if (res.status) {
        handleSubmit(values, actions);
      }
    } catch (error) {
      console.log(error || 'failed to fetch');
    }
  }



  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  const [hasSubmitted, setHasSubmitted] = useState(false)

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        const col = gsap.utils.toArray(`.${style.col1}`);
        const img = gsap.utils.toArray(`.${style.img1}`);

        gsap.set(col, { backdropFilter: "blur(15px" })
        gsap.set(img, { scaleY: 1.3, scaleX: 1.6 })

        gsap.to(col, {
          backdropFilter: "blur(0px)", stagger: {
            grid: [7, 15],
            from: "center",
            amount: 0.5
          }, scrollTrigger: main.current, ease: Expo.easeOut, autoAlpha: 1, duration: 1,
        })
        gsap.to(img, { scale: 1, scrollTrigger: main.current, ease: Expo.easeOut, autoAlpha: 1, duration: 1, })
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



  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        const img2 = gsap.utils.toArray(`.${style.img2}`);
        const success = gsap.utils.toArray(`.${style.success}`);
        gsap.set(img2, { autoAlpha: 1 })
        gsap.set(success, { autoAlpha: 1, yPercent: 50 })
        if (hasSubmitted) {
          gsap.to(img2, { ease: Expo.easeOut, autoAlpha: 1, duration: 1, })
          gsap.to(success, { ease: Expo.easeOut, autoAlpha: 1, yPercent: 0, duration: 1, })
        } else if (hasSubmitted === false) {
          gsap.to(img2, { ease: Expo.easeOut, autoAlpha: 0, duration: 1, })
          gsap.to(success, { ease: Expo.easeOut, autoAlpha: 0, yPercent: -50, duration: 1, })
        }
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

  }, { scope: main, dependencies: [hasSubmitted] });

  //enquiry form

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').max(30, 'Name must be at most 30 characters'),
    email: Yup.string().email('Invalid email').required('Email is required').max(50, 'Invalid email'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number  is required').max(13, 'Phone number is not valid'),
    message: Yup.string().required('Message is required').max(200),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values, "asd");
    setHasSubmitted(true)
    resetForm();
    setTimeout(() => {
      setHasSubmitted(false)
    }, 5000);
  };


  return {
    main,
    initialValues,
    validationSchema,
    handleSubmit,
    hasSubmitted,
    contactUs,
    width
  };
};
