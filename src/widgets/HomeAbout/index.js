"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";

const HomeAbout = ({ data }) => {
	const { main } = useHomeAbout({ style });

	return (
		<section className={`${style.section} sec-padding d-flex align-items-center  `} ref={main}>
			{/* <div className={`ratio ratio-1x1 ${style.grad}`}></div> */}
			<div className={`row text-white align-items-center d-none flex-nowrap ${style.title_wrap}`}>
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

			<div className={`ratio ${style.portrait} `}>
				<Image src={`/assets/images/portrait.png`} fill className="object-fit-cover" alt="logo icon" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4">

						<h2 className="h3 fw-300">Bashar Ahammed</h2>
						<p>Sr. Frontend Developer</p>
						<p>I build pixel-perfect, engaging, and accessible digital experiences.</p>

						<h2 className={`fw-700 d-none ${style.title}`}><span className={style.title_white}>Building interactive</span> experiences
							that blend technology seamlessly
							for a <span className={style.title_white}>modern</span> and <span className={style.title_grad}>Interactive</span> world.</h2>
					</div>
					<div className="col-lg-6">
						<p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I&apos;ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.

							My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I&apos;ve also released an online video course that covers everything you need to know to build a web app with the Spotify API.

							When I &apos; m not at the computer, I&apos;m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
							K
							o
							r
							o
							k

							s
							e
							e
							d
							s
							.</p>
					</div>
					<div className="col-lg-6 d-none">
						<div className="d-flex flex-column">
							<div className={`card-item`}>
								<div className="ratio ratio-1x1 overflow-hidden rounded-circle ">

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