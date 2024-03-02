"use client";
import Slider from "@/components/Slider";
import style from "./HomeTestimonials.module.scss";
import useHomeTestimonials from "./useHomeTestimonials";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const HomeTestimonials = ({ data, id }) => {
  const { main, customSettings } = useHomeTestimonials({ style });

  return (
    <section
      className={`${style.section} sec-padding`}
      ref={main}
      id={id} >
      <div className="container">
        <div className={`${style.slider}`}>
          <div className="container">
            <h5 className="text-primary h5 mb-lg-3 mb-3 text-center">{data?.title}</h5>
            <Slider className={''} customSettings={customSettings} >
              {(data?.testimonials?.length > 0) && data?.testimonials?.map((item, i) => {
                return (
                  <SwiperSlide key={i} className={`h-auto ${style.slider_item}`}>
                    <div className={`col-lg-10 mx-auto ${style.card}`}>
                      <h2 className="fw-300 text-center mb-lg-3"> {item?.title}</h2>
                      <p className={`text-center h5 fw-400 text-grey lh-base mb-4 mb-lg-5 ${style.content}`}>{item?.description}</p>
                      <div className={`${style.card_user} row gx-0 justify-content-center align-items-center`}>
                        <div className="col-auto">
                            <div className={`${style.card_user__img} ratio ratio-1x1 bg-light rounded-circle`}>
                              <Image src={`${item?.person?.img?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.person?.img?.alt}`} />
                            </div>
                        </div>
                        <div className="col-auto ps-2">
                          <h3 className="h6 fw-500 mb-0">{item?.person?.name}</h3>
                          <p className={"title-sm text-grey mb-0 fw-500 "}>{item?.person?.designation}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;