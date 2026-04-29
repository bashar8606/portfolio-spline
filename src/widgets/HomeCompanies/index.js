"use client";
import style from "./HomeCompanies.module.scss";

const HomeCompanies = () => {
	return (
		<section className={`${style.section} sec-padding`}>
			<div className="container">
				<div className={`flex-column text-center d-flex w-100 mb-5 ${style.title_wrap}`}>
					<p className="text-white opacity-75 mb-0">Career journey</p>
					<h2 className={`h1 ${style.title}`}>Work Experience</h2>
				</div>

				<div className={style.timeline}>
					{data.map((item, index) => (
						<div key={index} className={`${style.timeline_item} ${index % 2 === 0 ? style.left : style.right}`}>
							<div className={style.timeline_dot}>
								<span className={style.timeline_dot_inner} />
							</div>
							<div className={style.timeline_card}>
								<div className={style.timeline_card_header}>
									<span className={style.timeline_period}>{item.period}</span>
									{item.current && (
										<span className={style.timeline_badge}>Present</span>
									)}
								</div>
								<h3 className={`${style.timeline_role} h5`}>{item.role}</h3>
								<p className={`${style.timeline_company} mb-1`}>{item.company}</p>
								<p className={`${style.timeline_location} mb-0`}>
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
									{item.location}
								</p>
								{item.tags?.length > 0 && (
									<div className={`${style.timeline_tags} mt-3`}>
										{item.tags.map((tag, i) => (
											<span key={i} className={style.timeline_tag}>{tag}</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
					<div className={style.timeline_line} />
				</div>
			</div>
		</section>
	);
};

export default HomeCompanies;

const data = [
	{
		company: "Dubai Police HQ",
		role: "Senior Frontend Developer / Creative Developer",
		period: "Dec 2024 — Present",
		location: "Dubai, UAE · On-site",
		current: true,
		tags: ["Next.js", "GSAP", "Three.js", "React"],
	},
	{
		company: "Voizzit",
		role: "Senior Frontend Developer / UI Designer",
		period: "Nov 2023 — Nov 2024",
		location: "Dubai, UAE · On-site",
		current: false,
		tags: ["React", "UI Design", "CSS", "JavaScript"],
	},
	{
		company: "Webandcrafts",
		role: "Senior Frontend Developer",
		period: "Feb 2020 — Nov 2023",
		location: "Thrissur, Kerala, India · On-site",
		current: false,
		tags: ["Next.js", "React", "GSAP", "Three.js", "Strapi"],
	},
	{
		company: "Accudata Tech Solutions",
		role: "UI Developer",
		period: "May 2018 — Feb 2020",
		location: "India · On-site",
		current: false,
		tags: ["HTML", "CSS", "JavaScript"],
	},
];
