"use client"
import Image from "next/image";
import { useHomeJoin } from "./useHomeJoin";
import style from "./HomeJoin.module.scss";
import { Modal } from "react-bootstrap";
import EnquireForm from "@/components/EnquireForm";


const HomeJoin = ({ data }) => {
	const { main, btnRef, show, handleClose } = useHomeJoin(style);
	return (
		<section className={`${style.section} sec-padding`} ref={main}>
			<div className="container">
				<div className={`position-relative ${style.card} overflow-hidden`}>
					<div className={`${style.card_main_app} ${style.card_app} position-absolute`}>
						<div className="ratio">
							<Image src={`/assets/images/app_screen2.png`} priority={true} fill className="object-fit-contain" alt={`app screen splash`} />
						</div>
					</div>
					<div className={`${style.card_main_app1} ${style.card_app} position-absolute`}>
						<div className="ratio">
							<Image src={`/assets/images/app_screen2.png`} priority={true} fill className="object-fit-contain" alt={`app screen splash`} />
						</div>
					</div>

					<div className={`${style.content} text-center`}>
						<p className={`text-white fw-400 h5 mb-0 ${style.title} ${style.title_sm}`}>Join Us on the</p>
						<h2 className={`text-white h1 fw-700 lh-1 mb-3 mb-lg-4 ${style.title}`}>Journey</h2>
						<button  ref={btnRef} className="btn btn-secondary">Join Us</button>
					</div>
				</div>
			</div>


			<Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
                <Modal.Header closeButton className="border-bottom-0">
                </Modal.Header>
                <Modal.Body >
                    <EnquireForm />
                </Modal.Body>
            </Modal>
		</section>
	);
};

export default HomeJoin;