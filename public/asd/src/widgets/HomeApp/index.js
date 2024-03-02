"use client"
import Image from "next/image";
import { useHomeApp } from "./useHomeApp";
import style from "./HomeApp.module.scss";


const HomeApp = ({ data }) => {
	const { main } = useHomeApp(style);
	return (
		<section className={`${style.section} overflow-hidden d-flex align-items-center `} ref={main}>
			<div className="container">
				<div className={`row ${style.card_wrap} gy-lg-3 gy-2 gx-2`}>
					<div className={`${style.col_main} col-md-6`}>
						<div className={`ratio overflow-hidden ${style.card_main}`}>
							<div className={`${style.card_main_body} d-flex flex-column justify-content-between`}>
								<h2 className={`${style.title} fw-600 h3 text-white mb-0`}>Unlock your <br />
									<span className="fw-700">new experience</span></h2>
								<div>
									<span className="d-inline-block rounded-pill bg-white fw-600 px-3 py-2 title-md">Coming Soon</span>
								</div>
								<div className={`${style.card_main_app} position-absolute`}>
									<div className="ratio">
										<Image src={`/assets/images/app_screen1.png`} priority={true} fill className="object-fit-contain" alt={`app screen splash`} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`col-6 col-md-3 col-lg`}>
						<div className={`h-100 overflow-hidden bg-lightblue ${style.card_main}`}>
							<div className={`${style.card_main_body} row flex-column gx-0 h-100`}>
								<div className="col position-relative">
									<div className={`${style.card_main_app1} position-absolute`}>
										<div className="ratio">
											<Image src={`/assets/images/app_screen2.png`} priority={true} fill className="object-fit-contain" alt={`app screen splash`} />
										</div>
									</div>
								</div>
								<div className="col-auto">
									<h2 className={`${style.title} fw-500 h3 mb-0 `}>Seamless<br />
										enrollment,<br />
										<span className="fw-600 text-light">Personalized<br /> learning paths</span></h2>
								</div>
							</div>
						</div>
					</div>
					<div className={`col-6 col-md-3 col-lg`}>
						<div className={`h-100 overflow-hidden bg-lightblue ${style.card_main}`}>
							<div className={`${style.card_main_body} row flex-column gx-0 h-100`}>
								<div className="col-auto">
									<h2 className={`${style.title} fw-500 h3 mb-0`}>Unparalleled<br />
									usability,<br />
										<span className="fw-600 text-light"> Redefine the <br />  experience</span></h2>
								</div>
								<div className="col position-relative">
									<div className={`${style.card_main_app2} position-absolute`}>
										<div className="ratio">
											<Image src={`/assets/images/app_screen3.png`} priority={true} fill className="object-fit-contain" alt={`app screen splash`} />
										</div>
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

export default HomeApp;