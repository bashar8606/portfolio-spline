"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";

import { useHomeBanner } from "./useHomeBanner";


const HomeBanner = ({ data }) => {
	const { main } = useHomeBanner({ style });

	return (
		<section className={`${style.section}  position-relative pb-4 pb-lg-4 pt-lg-3`} ref={main} >
			<div className="container">
				<h1 className={`${style.title} h1 text-center lh-1 mb-3 mb-lg-4`}>
					<span className="h2 fw-400 ">Welcome to <br className="d-lg-none"/> Education<strong>Tech<sup className="text-primary">+</sup></strong></span>
					{/* <br /> */}
					{/* EducationTech<sup className="text-primary">+</sup> */}
				</h1>
				<div className="row align-items-center row-cols-3 row-cols-md-5 g-1 g-lg-3">
					{slides?.map((item, i) => {
						return (
							<div className={style.col} key={i}>
								{item?.images?.map((item_sub, index) => {
									return (
										<div key={index} style={{ '--bg': `${item_sub?.img?.bg}` }} className={`${style.grid_item} ${item_sub?.img?.size === "lg" ? style.grid_item__lg : item_sub?.img?.size === "sm" ? style.grid_item__sm : ""} overflow-hidden ratio `}>
											<Image src={`${item_sub?.img?.url}`} priority={true} fill className="object-fit-contain" alt={`${item_sub?.img?.alt}`} />
										</div>
									)
								})}
							</div>
						)
					})}
				</div>

				<div className={`${style.pf_wrap} d-flex justify-content-center justify-content-lg-start align-items-center mt-4 mt-lg-2`}>
					<div className="d-flex">
						{faculties?.data?.map((item, i)=>{
							return(
								<div key={i} className={`${style.pf_sm} d-inline-block rounded-circle overflow-hidden bg-light border-3 border border-white ratio ratio-1x1`}>
									<Image src={`${item?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.alt}`} />
								</div>
							)
						})}
						
					</div>
					<p className="mb-0 lh-1 ps-2 fw-600 title-md"><span className="fw-700 text-primary">100+</span> Faculty<br/> Specialist</p>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;


const slides = [
	{
		images: [
			{
				img: {
					url: "/assets/images/banner/1.png",
					alt: "img1",
					size: "",
					bg: "#FFB558"
				}
			}
		]
	},
	{
		images: [
			{
				img: {
					url: "/assets/images/banner/2.png",
					alt: "img1",
					size: "sm",
					bg: "#EBD4AB"
				}
			}, {
				img: {
					url: "/assets/images/banner/3.png",
					alt: "img1",
					size: "",
					bg: "#34BAB0"
				}
			},
		]
	},
	{
		images: [
			{
				img: {
					url: "/assets/images/banner/4.png",
					alt: "img1",
					size: "lg",
					bg: "#F7DC69"
				}
			},

		]
	}, {
		images: [
			{
				img: {
					url: "/assets/images/banner/5.png",
					alt: "img1",
					size: "",
					bg: "#FF8F49"
				}
			}, {
				img: {
					url: "/assets/images/banner/6.png",
					alt: "img1",
					size: "sm",
					bg: "#11A5F0"
				}
			},

		]
	}, {
		images: [
			{
				img: {
					url: "/assets/images/banner/7.png",
					alt: "img1",
					size: "",
					bg: "#80B996"
				}
			},
		]
	},
]

const faculties = {
	title:"",
	data:[
		{
			url:"/assets/images/p1.png",
			alt:""
		},{
			url:"/assets/images/p2.png",
			alt:""
		},{
			url:"/assets/images/p3.png",
			alt:""
		},{
			url:"/assets/images/p4.png",
			alt:""
		},
	]
}