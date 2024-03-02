"use client"
import Image from "next/image";
import { useHomeTab } from "./useHomeTab";
import style from "./HomeTab.module.scss";


const HomeTab = ({ data, id}) => {
	const { main } = useHomeTab(style);
	return (
		<section id={id} className={`${style.section} overflow-hidden d-flex align-items-center sec-padding `} ref={main}>
			<div className="container">
				<div className="row align-items-center gy-3">
					<div className="col-lg-6 order-2 order-lg-1">
						<div className={`${style.content} col-lg-8`}>
							<h5 className="text-primary h5">About Us</h5>
							<h2 className="h2">
								Unlocking the Future of Learning
							</h2>
							<p className="text-grey">
								At EducationTechPlus, we&apos;re dedicated to reshaping education through technology. Our mission is to empower educators, learners, and institutions by providing cutting-edge tools and resources
								that revolutionize the learning experience.
							</p>
						</div>
					</div>

					<div className={`col-lg-6 order-1 order-lg-2 ${style.tab_wrap}`}>
						<div className={`${style.tab} position-relative`}>
							<div className={`${style.tab_screen} ratio`}>
								<div className={`position-absolute start-0 top-0 ${style.tab_card}`}>
									<div className={`${style.tab_card_item} ${style.tab_card_item__one} d-inline-block`}>
										<div className={`d-inline-block rounded-4 w-50 mb-2`}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/icons/icon-color-1.png`} fill alt="logo" />
											</div>
										</div>
										<h6 className="fw-700 lh-1">Messaging</h6>
										<p className="mb-0 lh-1 fw-500">27 Test</p>
									</div>
									<div className={`${style.tab_card_item} ${style.tab_card_item__two} d-inline-block`}>
										<div className={`d-inline-block rounded-4 w-50 mb-2`}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/icons/icon-color-2.png`} fill alt="logo" />
											</div>
										</div>
										<h6 className="fw-700 lh-1">Chapter</h6>
										<p className="mb-0 lh-1 fw-500">27 Unit</p>
									</div>

									<div className={`${style.tab_card_item}  ${style.tab_card_item__three}  d-inline-block`}>
										<div className="row align-items-center gx-0">
											<div className={`col-auto ${style.col_left}`}>
												<div className="ratio ratio-1x1">
													<Image src={`/assets/images/icons/icon-color-3.png`} fill alt="logo" />
												</div>
											</div>
											<div className="col ps-2 ps-lg-3">
												<h6 className="fw-700 lh-1">Plan activation</h6>
												<p className="mb-0  fw-500 lh-sm">You need to complete this for the purchased pack activation</p>
											</div>
										</div>
									</div>
									<div className={`${style.tab_card_item}  ${style.tab_card_item__four} d-none  d-lg-inline-block`}>
										<h6 className="fw-400 lh-1 text-white mb-3">Orders</h6>
										<div className="d-flex justify-content-between mb-2">
											<p className="mb-0 lh-1 text-white">Progress</p>
											<p className="mb-0 lh-1 text-white">55%</p>
										</div>
										<div className="row row-cols-4 gx-1 mb-3">
											<div>
												<div className={`${style.progress}  bg-opacity-25 bg-white progress rounded-pill`} role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
													<div className="progress-bar progress-bar-striped progress-bar-animated bg-white" style={{ width: "100%" }}></div>
												</div>
											</div>
											<div>
												<div className={`${style.progress}  bg-opacity-25 bg-white progress rounded-pill`} role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
													<div className="progress-bar progress-bar-striped progress-bar-animated bg-white" style={{ width: "75%" }}></div>
												</div>
											</div>
											<div>
												<div className={`${style.progress}  bg-opacity-25 bg-white progress rounded-pill`} role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
													<div className="progress-bar progress-bar-striped progress-bar-animated bg-white" style={{ width: "0%" }}></div>
												</div>
											</div>
											<div>
												<div className={`${style.progress}  bg-opacity-25 bg-white progress rounded-pill`} role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
													<div className="progress-bar progress-bar-striped progress-bar-animated bg-white" style={{ width: "0%" }}></div>
												</div>
											</div>
										</div>

										<div className="d-flex align-items-center">
											<div className="d-flex">
											{faculties?.data?.map((item, i) => {
												return (
													<div key={i} className={`${style.pf_sm} d-inline-block rounded-circle overflow-hidden bg-light border border-white ratio ratio-1x1`}>
														<Image src={`${item?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.alt}`} />
													</div>
												)
											})}
											</div>
											<p className="text-white mb-0 lh-1 ps-2"><span className="fw-600">100+</span> Faculty</p>
										</div>
									</div>
								</div>
								<div className={`${style.tab_screen__frame} z-3`}>
									<Image src={`/assets/images/tab.png`} priority={true} fill alt="logo" />
								</div>
								<div className={style.tab_screen__video}>
									<div className={`d-flex align-items-end pb-3 px-3   ${style.tab_screen__control} z-3 position-absolute justify-content-between`}>
										<div className={style.item_wrap}>
											<div className={`${style.item} ratio bg-white ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-speaker.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio bg-white ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-video.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio  ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-mic.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio  ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-close.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
										</div>
										<div className={`${style.video_sm} ratio ratio-16x9 overflow-hidden bg-white rounded-4`}>
											<Image src={`/assets/images/banner-call.png`} className={`object-fit-cover`} fill alt="logo" />
										</div>


									</div>
									<div className={`${style.video_wrap} w-100 h-100 overflow-hidden position-relative`}>
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
			</div>
		</section>
	);
};

export default HomeTab;



const faculties = {
	title: "",
	data: [
		{
			url: "/assets/images/p1.png",
			alt: ""
		}, {
			url: "/assets/images/p2.png",
			alt: ""
		}, {
			url: "/assets/images/p3.png",
			alt: ""
		}, {
			url: "/assets/images/p4.png",
			alt: ""
		},
	]
}