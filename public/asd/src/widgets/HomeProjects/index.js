"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";

const HomeAbout = ({ data }) => {
	const { main } = useHomeAbout({ style });

	return (
		<section  className={`${style.section}  position-relative`} ref={main}>
			<div className="container">
				<div className={style.card_wrap}>
					<div className="row row-cols-lg-3 gx-lg-5 gy-3">
						{data?.cards?.map((item, i) => {
							return (
								<div key={i}>
									<div className={`${style.card_item} row`}>
										<div className="col-auto">
											<div className="ratio ratio-1x1">
												<Image src={`${item?.img?.url}`} className="object-fit-contain" fill alt={item?.img?.alt} />
											</div>
										</div>
										<div className="col">
											<h3 className="text-white fw-600 h5">{item?.title}</h3>
											<p className="title-md text-white opacity-50 mb-0">{item?.description}</p>
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

export default HomeAbout;