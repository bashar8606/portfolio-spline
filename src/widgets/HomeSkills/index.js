"use client"
import Image from "next/image";
import style from "./HomeSkills.module.scss";
import { useHomeSkills } from "./useHomeSkills";
import Card from "@/components/Card";


const HomeSkills = ({ data }) => {
	const { main, width } = useHomeSkills(style);
	return (
		<section className={`${style.section} overflow-hidden d-flex align-items-center  `} ref={main}>
			<div className="container">
				<div className={`${style.title_wrap} text-center col-lg-8 mx-auto mb-lg-5`}>
					<h5 className="text-primary h5">{data?.title}</h5>
					<h2 className="h2 mb-0">{data?.title_sub} </h2>
				</div>

				<div className={`${style.content_wrap} `}>
					{/* {width>=992? */}
					<div className={`col-lg-6 ${style.content_img} z-3 d-none d-lg-block`}>

						<div className={`${style.card_wrap}`}>
							<div className={`d-flex align-items-center`}>
								<Card className={`d-flex justify-content-center `}>
									<div className={style.icons}>
										<Card className={`${style.icon_skill}  rounded-4 p-2`} instyle={{ "--top": "-13%", "--left": "10%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_next.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{ "--top": "-10%", "--left": "60%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_react.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{ "--top": "20%", "--left": "90%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_tailwind.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{ "--top": "60%", "--left": "95%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_bootstrap.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{ "--top": "90%", "--left": "15%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_git.png`} quality={100} fill className="object-fit-contain" />
											</div>

										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{ "--top": "98%", "--left": "65%" }}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_jira.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>

										<div className={`${style.toolbar} position-absolute z-3`} style={{ "--top": "15%", "--left": "-4%" }}>
											<Card className={`${style.toolbar_window} rounded-4 p-2`} >
												<div className={`d-flex justify-content-end gap-2 ${style.toolbar_head}`}>
													<span className="d-block rounded-circle "></span>
													<span className="d-block rounded-circle "></span>
													<span className="d-block rounded-circle "></span>
												</div>

												<div className={`ratio w-50 mx-auto my-4 ${style.toolbar_body}`} style={{ "--bs-aspect-ratio": '881%' }}>
													<Image src={`/assets/images/icon_stack.svg`} fill className="object-fit-contain" />
												</div>

											</Card>
										</div>
									</div>
									<div className={` ${style.code_wrap}`} style={{ "--bs-aspect-ratio": '65.7%' }}>
										<div className="ratio"  >
											<Image src={`/assets/images/text.png`} quality={100} unoptimized fill className="object-fit-contain" />
										</div>
									</div>
								</Card>
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
										</div>
									</div>
									<div className="col-lg-5">
										<div className="col-lg-10 mx-auto">
											<h3 className="mb-lg-3 fw-300 text-white h2 lh-sm" dangerouslySetInnerHTML={{ __html: item?.title }}></h3>
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

export default HomeSkills;
