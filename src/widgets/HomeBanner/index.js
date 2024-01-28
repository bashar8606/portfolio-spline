"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";
import { useHomeBanner } from "./useHomeBanner";

const HomeBanner = ({ data }) => {
	const { main, active, customSettings } = useHomeBanner({ style });

	return (
		<section className={`${style.section} sec-padding  bg-secondary`} >
			<div className="container">

				<h1 className="text-center h4 text-white fw-400 lh-1">I’m Bashar, I transform every</h1>
				<h2 className={`text-center ${style.title}`}>
					<span className="text-white">
						Pixels to&nbsp;
					</span> 
					 <span className={style.title_toggle}>
						Creative
					</span>
				</h2>


				<div className={`position-absolute start-0  w-100 ratio ${style.line}`}>
					<div>
						<div className={`${style.line_round} rounded-circle bg-white position-absolute z-3 translate-middle start-50 top-50`}></div>
					</div>
					<Image src={`/assets/images/lines.svg`} fill className="object-fit-cover" alt="logo icon" />
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;