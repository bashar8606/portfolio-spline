"use client";
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";
import Link from "next/link";

const HomeAbout = ({ data }) => {
  const { main } = useHomeAbout({ style });

  return (
	<>
    <section
      className={`${style.section} sec-padding d-flex align-items-center  `}
      ref={main}
    >
      {/* <div className={`ratio ratio-1x1 ${style.grad}`}></div> */}

	  <div className={`ratio ${style.shapes} position-absolute top-0 start-50 `}>
        <Image
          src={`/assets/images/shapes.png`}
          fill
          className="object-fit-cover"
          alt="logo icon"
        />
      </div>



      <div className={`ratio ${style.portrait} `}>
        <Image
          src={`/assets/images/portrait.png`}
          fill
          className="object-fit-cover"
          alt="logo icon"
        />
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-7">
            <h2 className="h2 fw-700">Hi, I'm Bashar — Developer</h2>
           
            <h3 className={`fw-600 h3 mb-lg-4  ${style.title_sm}`}>
              I enjoy creating products from scratch and improve existing ones.
              In simple terms, I design websites that make a profit or enhance
              business.
            </h3>
			<Link href="" className="btn btn-secondary">Know more</Link>
          </div>
        </div>
      </div>
    </section>
<div className={`${style.strip}`}></div>
	</>
  );
};

export default HomeAbout;
