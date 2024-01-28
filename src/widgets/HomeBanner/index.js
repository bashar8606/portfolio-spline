"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";
import { useHomeBanner } from "./useHomeBanner";

const HomeBanner = ({ data }) => {
	const { main } = useHomeBanner({ style });

	return (
		<section ref={main} className={`${style.section} sec-padding d-flex flex-column justify-content-between  bg-secondary`} >
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
			</div>

			<div className={` ${style.line}`}>
				<div className="ratio">
					<div>
						<div className={`${style.line_round} rounded-circle bg-white position-absolute z-3  start-50 top-50`}></div>
					</div>
					<div className={style.line_path}>
					<Image src={`/assets/images/lines.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;