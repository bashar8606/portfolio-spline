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
								<Card>
									<div className={style.icons}>
										<Card className={`${style.icon_skill}  rounded-4 p-2`} instyle={{"--top": "-13%", "--left": "10%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_next.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{"--top": "-10%", "--left": "80%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_react.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{"--top": "10%", "--left": "10%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_tailwind.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{"--top": "10%", "--left": "10%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_bootstrap.png`} quality={100} fill className="object-fit-contain" />
											</div>
										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{"--top": "10%", "--left": "10%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_git.png`} quality={100} fill className="object-fit-contain" />
											</div>

										</Card>
										<Card className={`${style.icon_skill} rounded-4 p-2`} instyle={{"--top": "10%", "--left": "10%"}}>
											<div className="ratio ratio-1x1">
												<Image src={`/assets/images/skills/icon_jira.png`} quality={100} fill className="object-fit-contain" />
											</div>

										</Card>
									</div>
									<div className="ratio ratio-4x3">
										<div className="text-white">
											sdf
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
