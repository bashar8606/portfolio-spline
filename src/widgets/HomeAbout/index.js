"use client"
import Image from "next/image";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";

const HomeAbout = ({ data }) => {
	const { main } = useHomeAbout({ style });

	return (
		<section className={`${style.section} sec-padding d-flex align-items-center `} ref={main}>
			<div className="container">

			fgdgfdgf
			</div>
		</section>
	);
};

export default HomeAbout;