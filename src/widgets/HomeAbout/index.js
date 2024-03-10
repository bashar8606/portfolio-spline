"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";

const HomeAbout = ({ data }) => {
	const { main } = useHomeAbout({ style });

	return (
		<section className={`${style.section} sec-padding d-flex `} ref={main}>
			<div className={`ratio ratio-1x1 ${style.grad}`}></div>
			<div className={`ratio ${style.portrait}`}>
				<Image src={`/assets/images/portrait.png`} fill className="object-fit-cover" alt="logo icon" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className={`fw-700 ${style.title}`}><span className={style.title_white}>Building interactive</span> experiences
							that blend technology seamlessly
							for a <span className={style.title_white}>modern</span> and <span className={style.title_grad}>Interactive</span> world.</h2>
					</div>
					<div className="col-lg-6"></div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;