"use client";
import Link from "next/link";
import style from "./HomeGlobe.module.scss";
import useHomeGlobe from "./useHomeGlobe";
import Image from "next/image";

const HomeGlobe = ({ data }) => {
  const { main, mainPin } = useHomeGlobe({ style });

  return (
    <section
      ref={mainPin}
      className={style.main_wrapper}
    >
      <div className={`${style.section}`} ref={main}>
        <span className={`${style.bg_decor} position-absolute rounded-circle d-block`}></span>

      <div className={`ratio ${style.portrait} `}>
				<Image src={`/assets/images/portrait.png`} fill className="object-fit-cover" alt="logo icon" />
			</div>



        <div className={style.expertise_text}>
          <div className={style.section1}>
            <div className={`container`}>
              <div className={`${style.inner}`}>
                <div className={`${style.content} col-lg-5`}>
                    <h2
                      className={`${style.title} ${style.anim_in} fw-300 mb-lg-1 lh-1  fw-regular`}
                    >
                      Bashar ahammed
                    </h2>

                    <p
                      className={`${style.designation} ${style.anim_in} fw-300  mb-lg-4 `}
                    >
                      Designer / Developer
                    </p>
                    <p className={`${style.anim_in} ${style.description} title-md mb-lg-4`}>
                      Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web ing software for an advertising agency, a start-up, a huge corporation
                    </p>
                    <div className={`${style.anim_in} ${style.btn_wrap}`}>
                      <Link href="#" className="btn btn-lightblue rounded-pill me-3">Resume</Link>
                      <Link href="#" className="btn btn-secondary rounded-pill">Get in touch</Link>
                    </div>
                </div>
              </div>
            </div>

            <div className={`container`}>
              <div className={`${style.inner}`}>
                <div className="row justify-content-between align-items-end">
                  <div className="col-lg-4">
                    <p className="mb-0">
                      <span className="d-inline-block me-3 title-md fw-500"> LinkedIn</span>
                      <span className="d-inline-block me-3 title-md fw-500"> Github</span>
                      <span className="d-inline-block me-3 title-md fw-500"> Behance</span>
                      <span className="d-inline-block me-3 title-md fw-500"> Dribbble</span>
                    </p>
                  </div>
                  <div className="col-lg-3">
                  <div
                  className={`${style.list}  row row-cols-md-2`}
                >
                    <div className={`${style.item}`} >
                        <h3 className={`${style.sub_title} lh-1  fw-300 mb-0`}>
                          50+
                        </h3>
                        <p className={`${style.sub_description} mb-0`}>
                  Projects
                        </p>
                    </div>

                    <div className={`${style.item}`} >
                        <h3 className={`${style.sub_title} lh-1 mb-0  fw-300`}>
                          6+
                        </h3>
                        <p className={`${style.sub_description} mb-0`}>
                          Years
                        </p>
                    </div>

                
                </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className={style.section2}>
          <div className={`${style.block}`}>
         
            <div className={`ratio ratio-1x1 ${style.block_ratio}`}>

            <div className={style.block_icons}>
              
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon_react.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
  
              <div className={`${style.icon} ratio ratio-1x1`}>
                <Image src={`/assets/images/skills/icon_next.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon_tailwind.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon_git.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon1.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon2.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon3.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
              <div className={`${style.icon} ratio ratio-1x1`}>
                 <Image src={`/assets/images/skills/icon_react.png`} fill className="object-fit-contain" alt="logo icon" />
              </div>
         
              </div>



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
