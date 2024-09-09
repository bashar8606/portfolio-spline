"use client";
import Slider from "@/components/Slider";
import style from "./HomeProjects.module.scss";
import useHomeProjects from "./useHomeProjects";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiOutlineArrowUpRight } from "react-icons/hi2";


const HomeProjects = ({ id }) => {
	const { main, customSettings, customSettings1, width, show, handleClose, handleShow } = useHomeProjects({ style });

	return (
		<section className="sec-padding pb-0"
			ref={main}
			id={id}
		>
			<div className={`flex-column text-center d-flex w-100 ${style.title_wrap}`}>
				<p className="text-white opacity-75 mb-0">Curated works</p>
				<h2 className={`h1 ${style.title}`}>Featured works</h2>
			</div>

			{width < 991 ?
				<div className={`d-lg-none ${style.slider}`}>
					<div className="container">
						<h5 className="text-primary h5 mb-2">What we offer</h5>
						<Slider className={''} customSettings={customSettings}>
							{(data?.length > 0) && data?.map((item, i) => {
								return (
									<SwiperSlide key={i} className={`h-auto ${style.slider_item}`}>
										<div className={`${style.card_sm} h-100`}>
											<div className={`${style.card_img1} mb-3 ratio ratio-4x3 bg-transparent`} >
												<div className={`${style.card_img1_img} `}>
													<div className="position-absolute top-0 start-0 w-100 h-100">
														<Image src={`${item?.cover?.url}`} className="object-fit-contain" fill alt={item?.cover?.alt} />
													</div>
													{item?.icons?.map((item_sub, i) => {
														return (
															<div key={i} className={`${style.item} ratio`} style={{ '--top': `${item_sub?.position?.top}`, '--left': `${item_sub?.position?.left}`, '--width': `${item_sub?.size?.width}`, '--bs-aspect-ratio': `${item_sub?.size?.ratio}` }}>
																<Image src={`${item_sub?.img?.url}`} className="object-fit-contain" fill alt={item_sub?.img?.alt} />
															</div>
														)
													})}
												</div>
											</div>
											<h2 className="fw-600 h5 mb-lg-4">{item?.title}</h2>
											<div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
										</div>
									</SwiperSlide>
								)
							})}
						</Slider>
					</div> </div> : ""}
			<div className={style.section}>
				<div className={`container`}>
					<div className={`row ${style.row} justify-content-between d-lg-flex d-none`}>
						<div className={`${style.col_left} `}>
							{data?.slice(0, 6)?.map((item, index) => {
								return (
									<div className={`${style.content}`} key={index}>
										<div className="mb-2">
											{item?.tags?.map((tag,i)=>{
												return(
												<div key={i} className="d-inline-block px-2 rounded-pill py-1 border border-grey text-white fw-500 title-sm mb-2 me-2">{tag}</div>
												)
											})}
											
										</div>
										
										<h2 className="h2 mb-lg-4 text-white fw-300">{item?.title}</h2>
										<div className="dynamic-content text-grey mb-3" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
										<a href={item?.link} target="_blank" className={`${style.btn} d-inline-flex align-items-center text-white`}>View project <span className="ms-2 rounded-pill d-flex align-items-center justify-content-center">
							
										<HiOutlineArrowUpRight />
											</span></a>
									</div>
								)
							})}
						</div>
						<div className={`${style.col_right} `}>
							<div className={`${style.card} mb-4 mb-lg-0 ratio`}>
								{data?.slice(0, 6)?.map((item, index) => (
									<div className={`${style.card_img1} overflow-hidden`} key={index}>
										<div className={`${style.card_img1_img} overflow-hidden`}>
											<div className="position-absolute top-0 start-0 w-100 h-100">
												<Image src={`${item?.cover?.url}`} sizes="50vw" quality={90} className="object-fit-cover" fill alt={item?.cover?.alt} />
											</div>
											
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* {width >= 991 ?
					<div className={`${style.view} text-center`}>
						<button className={`${style.view_btn} rounded-pill row gx-2`} onClick={handleShow}>
							<span className={`${style.view_btn_text} col`}>
								Explore more works
							</span>
							<span className={`col-auto ${style.view_btn_icon}`}>+</span></button>
					</div> : ""} */}

			</div>

			<Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
				<Modal.Header closeButton className="border-bottom-0">
				</Modal.Header>
				<Modal.Body >
					<div className="d-flex  align-items-center position-relative px-lg-3">
						<div className="container">
							<Slider className={''} customSettings={customSettings1}>
								{(data?.length > 0) && data?.map((item, i) => {
									return (
										<SwiperSlide key={i} className={`h-auto ${style.slider_item}`}>
											<div className={`${style.card_sm} h-100`}>
												<div className={`${style.card_img1} mb-3 ratio ratio-4x3 bg-transparent`} >
													<div className={`${style.card_img1_img} `}>
														<div className="position-absolute top-0 start-0 w-100 h-100">
															<Image src={`${item?.cover?.url}`} className="object-fit-contain" fill alt={item?.cover?.alt} />
														</div>
														{item?.icons?.map((item_sub, i) => {
															return (
																<div key={i} className={`${style.item} ratio`} style={{ '--top': `${item_sub?.position?.top}`, '--left': `${item_sub?.position?.left}`, '--width': `${item_sub?.size?.width}`, '--bs-aspect-ratio': `${item_sub?.size?.ratio}` }}>
																	<Image src={`${item_sub?.img?.url}`} className="object-fit-contain" fill alt={item_sub?.img?.alt} />
																</div>
															)
														})}
													</div>
												</div>
												<h2 className="fw-600 h5 mb-lg-4">{item?.title}</h2>
												<div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
											</div>
										</SwiperSlide>
									)
								})}
							</Slider>
							<button className={`${style.nav} position-absolute top-50 start-0 z-3 translate-middle-y rounded-circle ${style.nav_prev}`}>
								<IoIosArrowBack />
							</button>
							<button className={`${style.nav} position-absolute top-50 end-0 z-3 translate-middle-y rounded-circle ${style.nav_next}`}>
								<IoIosArrowForward />
							</button>
						</div>
					</div>
				</Modal.Body>
			</Modal>



		</section>
	);
};

export default HomeProjects;


const data = [
	{
		title: "Wac.co",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/wac_moc.png",
			alt: ""
		},
		link:"https://wac.co/",
		tags:["Frontend Development", "Next js","GSAP"]
		
	}, {
		title: "Airretailer",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/wac_moc.png",
			alt: ""
		},
		link:"https://new.airretailer.com",
		tags:["Frontend","CMS-Backend","Strapi", "Next js","GSAP"]
		
	},{
		title: "MDX",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/mdx_moc.png",
			alt: ""
		},
		link:"https://mdx.ac.ae/",
		tags:["Frontend Development", "Next js","GSAP"]
		
	}, {
		title: "3d Presentation of apple using spline",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/airpod_moc.png",
			alt: ""
		},
		link:"https://dribbble.com/shots/24630872-Airpod-products-intro-using-3d-Spline",
		tags:["3d Render", "Spline"]
		
	},
	{
		title: "Greenmeat",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/w1.jpeg",
			alt: ""
		},
		link:"https://www.thegreenmeat.com/",
		tags:["Frontend Development", "React js","GSAP"]
		
	}, {
		title: "jerseygroup.com",
		description: "<p>Personalized one-on-one sessions with experienced tutors. Customized learning plans to address specific learning goals.</p>",
		cover: {
			url: "/assets/images/w2.jpeg",
			alt: ""
		},
		link:"https://jerseygroup.com/",
		tags:["Frontend Development", "React js","GSAP"]

	},]