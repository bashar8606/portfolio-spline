"use client"
import Image from "next/image";
import style from "./HomeVision.module.scss";
import { useHomeVision } from "./useHomeVision";

const HomeVision = ({ data }) => {
	// const { main } = useHomeVision({ style });
	return (
		<section className={`${style.section} sec-padding d-flex  align-items-center`} >
			<div className={style.bg}>
				<div className={style.bg_item}>
					<Image src={`/assets/images/bg-home.jpg`} fill className="object-fit-cover" alt="logo icon" />
				</div>
				<div className={style.bg_item}>
					{/* <Image src={`/assets/images/bg-galaxy.jpg`} fill className="object-fit-cover" alt="logo icon" /> */}
				</div>
				<div className={style.bg_item}>
					{/* <Image src={`/assets/images/bg-office.jpg`} fill className="object-fit-cover" alt="logo icon" /> */}
				</div>
			</div>


			<div className={`container`}>
				<div className={style.card_vr}>
					<div className="ratio ratio-4x3"></div>
				</div>

			</div>
		</section>
	);
};

export default HomeVision;