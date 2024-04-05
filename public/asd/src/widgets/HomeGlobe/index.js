"use client";
import style from "./HomeGlobe.module.scss";
import useHomeGlobe from "./useHomeGlobe";

const HomeGlobe = ({ data }) => {
  const { main, mainPin } = useHomeGlobe({ style });

  return (
    <section
      ref={mainPin}
      className={style.main_wrapper}
    >
      <div className={`${style.section}`} ref={main}>
        <div className={style.expertise_text}>
          <div className={style.section1}>
            <div className={`container`}>
              <div className={`${style.inner}`}>
                <div className={`${style.content}`}>
                    <h2
                      className={`${style.title} ${style.anim_in} mb-2 mb-lg-3 ttl-80 fw-regular`}
                    >
                      asda
                    </h2>

                    <p
                      className={`${style.description} ${style.anim_in}  fw-light mb-3 `}
                    >
              asd
                    </p>
                </div>
                <div
                  className={`${style.list} ${style.anim_in} row row-cols-md-3`}
                >
                    <div className={`${style.item}`} >
                        <h3 className={`${style.sub_title}  `}>
                          345
                        </h3>
                        <p className={`${style.sub_description} mb-0`}>
                  dfgdfgdfg
                        </p>
                    </div>

                    <div className={`${style.item}`} >
                        <h3 className={`${style.sub_title}  `}>
                          345
                        </h3>
                        <p className={`${style.sub_description} mb-0`}>
                  dfgdfgdfg
                        </p>
                    </div>

                    <div className={`${style.item}`} >
                        <h3 className={`${style.sub_title}  `}>
                          345
                        </h3>
                        <p className={`${style.sub_description} mb-0`}>
                  dfgdfgdfg
                        </p>
                    </div>
                </div>

                  <div className={`${style.link} ${style.anim_in}`}>
                   <button>asdfasd</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.section2}>
          <div className={`${style.block}`}>
            <div className={`ratio ratio-1x1 ${style.block_ratio}`}>
              <div
                className={`${style.block_circle} ${style.block_circle__one}`}
              ></div>
              <div
                className={`${style.block_circle} ${style.block_circle__two}`}
              >
                <div className={style.block_circle__grad}></div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className={`${style.block_content}`}>
                <h2
                  className={`${style.block_title} ttl-120  fw-light mb-2 mb-lg-2 f-primary`}
                >
           
                      <span className={style.anim}>
                       asdasdsd
                      </span>
                      <span className={style.anim} >
                       asdasdsd
                      </span>
                      <span className={style.anim}>
                       asdasdsd
                      </span>
                </h2>

                <p className={` fw-light mb-4 mb-lg-4 ${style.anim}`}>
               sdfsdf
                </p>
                <div className={`${style.anim} ${style.link_wrap} text-center`}>
                 <button>sdfsdf</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGlobe;
