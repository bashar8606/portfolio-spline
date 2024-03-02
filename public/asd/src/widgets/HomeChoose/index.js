"use client"
import Image from "next/image";
import { useHomeChoose } from "./useHomeChoose";
import style from "./HomeChoose.module.scss";


const HomeChoose = ({ data, id }) => {
	const { main, width } = useHomeChoose(style);
	return (
		<section id={id} className={`${style.section} overflow-hidden d-flex align-items-center  `} ref={main}>
			<div className="container">
				<div className={`${style.title_wrap} text-center col-lg-8 mx-auto mb-lg-5`}>
					<h5 className="text-primary h5">{data?.title}</h5>
					<h2 className="h2 mb-0">{data?.title_sub} </h2>
				</div>


				<div className={`${style.content_wrap} position-relative`}>
					{/* {width>=992? */}
					<div className={`col-lg-6 ${style.content_img} z-3 d-none d-lg-block`}>
						<div className="col-lg-9 mx-auto">
							<div className="ratio ratio-1x1 ">
								<div className="d-flex align-items-center justify-content-center ">
									<div className={`${style.path} ${style.path1}`}></div>
									<div className={`${style.path} ${style.path2}`}></div>
									<div className={`${style.path} ${style.path3}`}></div>
									<div className={`${style.c1} ${style.c} ratio`}><Image src={'/assets/images/c1.png'} fill className="object-fit-cover" alt={`card decor1`} /></div>
									<div className={`${style.c2} ${style.c} ratio`}><Image src={'/assets/images/c2.png'} fill className="object-fit-cover" alt={`card decor1`} /></div>
									<div className={`${style.c3} ${style.c} ratio`}>
										<Image src={'/assets/images/content1.png'} fill className={`${style.c3_item} object-fit-contain`} alt={`card decor1`} />
										<p className={`${style.c3_item} d-flex align-items-center px-3 text-white title-md text-start fw-500 mb-0`}>Enroll Now</p>
										<Image src={'/assets/images/content2.png'} fill className={`${style.c3_item} object-fit-contain`} alt={`card decor1`} />
									</div>
									<div className={`${style.c4} ${style.c} ratio`}><Image src={'/assets/images/c4.png'} fill className="object-fit-cover" alt={`card decor1`} /></div>
									<div className={`${style.c5} ${style.c} ratio`}><Image src={'/assets/images/c5.png'} fill className="object-fit-cover" alt={`card decor1`} /></div>
									<div className={`${style.pf_wrap} d-flex  align-items-center `}>
										<div className="d-flex">
											{faculties?.data?.map((item, i) => {
												return (
													<div key={i} className={`${style.pf_sm} d-inline-block rounded-circle overflow-hidden bg-light border-3 border border-white ratio ratio-1x1`}>
														<Image src={`${item?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.alt}`} />
													</div>
												)
											})}

										</div>
										<p className="mb-0 lh-1 ps-2 fw-600 title-md"><span className="fw-700 text-primary">100+</span> Faculty<br /> Specialist</p>
									</div>
									<div className={style.card} >
										<div className={`${style.card_head} ratio`} >
											<Image src={'/assets/images/card_head_img1.png'} fill className={`object-fit-contain ${style.img1}`} alt={"image of content"} />
											<Image src={'/assets/images/card_head_img2.png'} fill className={`object-fit-cover ${style.img2}`} alt={"image of content"} />
											<Image src={'/assets/images/card_head_img3.png'} fill className={`object-fit-contain ${style.img3}`} alt={"image of content"} />
										</div>
										<div className={`${style.card_body} ratio  bg-white`}>
											<div className="px-3 py-3">
												<div className="position-relative h-100 w-100">
													<Image src={'/assets/images/content.png'} fill className="object-fit-contain" style={{objectPosition: "top"}} alt={"image of content"} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* // :""} */}
					<div>
						{data?.data?.map((item, i) => {
							return (
								<div key={i} className={`row gy-3  justify-content-between ${style.content_item} align-items-center mb-4 mb-lg-0`}>
									<div className="col-lg-5">
										<div className={"ratio ratio-1x1"}>
											{width<992? <Image src={`${item?.img?.url}`} fill className="object-fit-cover " alt={`${item?.img?.alt}`} />:""}
										</div>
									</div>
									<div className="col-lg-5">
										<div className="col-lg-10 mx-auto">
											<h3 className="mb-lg-3">{item?.title}</h3>
											<p className="text-grey mb-0">{item?.description}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeChoose;

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