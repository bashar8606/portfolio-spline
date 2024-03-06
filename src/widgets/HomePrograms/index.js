"use client";
import style from "./HomePrograms.module.scss";
import useHomePrograms from "./useHomePrograms";
import Image from "next/image";

const HomePrograms = ({ data, id }) => {
  const { main } = useHomePrograms({ style });
  return (
    <section
      className={`${style.section} sec-padding`}
      ref={main} id={id}>
      <div className={`container`}>
        <div className="mx-auto col-lg-5 text-lg-center mb-4 mb-lg-5">
          <h5 className="text-primary h5">{data?.title}</h5>
          <h2 className="h2 lh-sm mb-2 mb-lg-3">{data?.title_sub}</h2>
        </div>
        <div className="row g-2 g-lg-3">
          <div className={`col-md col-6 ${style.col_one}`}>
            <div className={`${style.card} position-relative overflow-hidden h-100 ${style.card_sm} bg-white`}>
              <span className={`${style.glass} z-1 position-absolute top-0 start-0 w-100 h-100`}></span>
              <div className={`z-3 position-relative ${style.card_head}`}>
                <span className={`${style.label} d-inline-block title-md  rounded-pill  py-1 px-2 text-white fw-600 mb-3`}>{data?.programs[0]?.category}</span>
                <h2 className={`${style.title} fw-500 lh-md h4 `}>{data?.programs[0]?.title}</h2>
              </div>

              <div className={`position-absolute bottom-0 start-0 w-100 z-3 ${style.card_body}`}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[0]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[0]?.img?.alt} />
                  </div>
                </div>
              </div>
              <div className={style.card_body}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[0]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[0]?.img?.alt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md col-6 ${style.col_two}`}>
            <div className={`${style.card} h-100 ${style.card_sm} position-relative overflow-hidden bg-white`}>
              <span className={`${style.glass} z-1 position-absolute top-0 start-0 w-100 h-100`}></span>
              <div className={`z-3 position-relative ${style.card_head}`}>
                <span className={`${style.label} d-inline-block title-md  rounded-pill  py-1 px-2 text-white fw-600 mb-3`}>{data?.programs[1]?.category}</span>
                <h2 className={`${style.title} fw-500 lh-md h4 `}>{data?.programs[1]?.title}</h2>
              </div>
              <div className={`position-absolute bottom-0 start-0 w-100 z-3 ${style.card_body}`}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[1]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[1]?.img?.alt} />
                  </div>
                </div>
              </div>
              <div className={style.card_body}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[1]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[1]?.img?.alt} />
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className={`col-md-5 ${style.col_main}`}>
            <div className={`${style.card} h-100 ${style.card_lg} position-relative overflow-hidden bg-black`}>
              <span className={`${style.glass} z-1 position-absolute top-0 start-0 w-100 h-100`}></span>
              <div className={`z-3 position-relative ${style.card_head}`}>
                <span className={`${style.label} d-inline-block title-md  rounded-pill  py-1 px-2 text-white fw-600 mb-3`}>{data?.programs[2]?.category}</span>
                <h2 className={`${style.title} text-lightblue lh-md fw-500 h4 `}>{data?.programs[2]?.title}</h2>
              </div>
              <div className={`position-absolute bottom-0 start-0 w-100 z-3 ${style.card_body}`}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[2]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[2]?.img?.alt} />
                  </div>
                </div>
              </div>
              <div className={style.card_body}>
                <div className="ratio">
                  <div className={style.card_img}>
                    <Image src={data?.programs[2]?.img?.url} priority={true} fill className="object-fit-contain" alt={data?.programs[2]?.img?.alt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrograms;

