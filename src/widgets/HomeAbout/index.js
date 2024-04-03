"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";

const HomeAbout = ({ data }) => {
	const { main } = useHomeAbout({ style });

	return (
		<section className={`${style.section} sec-padding d-flex  `} ref={main}>
			{/* <div className={`ratio ratio-1x1 ${style.grad}`}></div> */}
			<div className={`row text-white align-items-center flex-nowrap ${style.title_wrap}`}>
				<span className="d-block col-auto">Webgl</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">Interactive</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">Development</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">Frontend</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">3d</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">Bashar</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
				<span className="d-block col-auto">Bashar</span>
				<div className={`col-auto ${style.star}`}>
					<div className="ratio ratio-1x1">
						<Image src={`/assets/images/star.svg`} fill className="object-fit-cover" alt="logo icon" />
					</div>
				</div>
			</div>

			<Image src={`/assets/images/bg-blur-optimized.png`} quality={75} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" fill className={`object-fit-cover ${style.bg_cover}`} alt="logo icon" />
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
					<div className="col-lg-6">
						<div className="d-flex flex-column">
							<div className={`card-item`}>
								<div className="ratio ratio-1x1 overflow-hidden rounded-circle d-none">

									<video width={`100%`}
										height={`100%`}
										loop
										muted
										autoPlay
										playsInline
										className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
										src="/assets/images/video.mp4">
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;