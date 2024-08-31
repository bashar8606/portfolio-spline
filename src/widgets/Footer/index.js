import Link from 'next/link';
import style from "./Footer.module.scss"
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

function Footer() {
    return (
        <footer className={`${style.footer} bg-black`}>
            {/* <div className={style.footer_top}>
                <div className="container">
                    <div className="row row-cols-lg-3 gy-3">
                        <div className={style.footer_col}>
                            <div className={style.footer_spec}>
                                <h3 className={`${style.footer_spec__title} mb-1  h5 fw-500 text-uppercase text-white`}>Free Delivery</h3>
                                <p className='mb-0'>Free delivery on all products within India</p>
                            </div>
                        </div>
                        <div className={style.footer_col}>
                            <div className={style.footer_spec}>
                                <h3 className={`${style.footer_spec__title} mb-1  h5 fw-500 text-uppercase text-white`}>Hassle-Free Returns</h3>
                                <p className='mb-0'>Free delivery on all products within India</p>
                            </div>
                        </div>
                        <div className={style.footer_col}>
                            <div className={style.footer_spec}>
                                <h3 className={`${style.footer_spec__title} mb-1  h5 fw-500 text-uppercase text-white`}>Secure Payments</h3>
                                <p className='mb-0'>Free delivery on all products within India</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`sec-padding ${style.footer_nav}`}>
                <div className="container">
                    <div className="row gy-3 gy-lg-0">
                        <div className="col-6 col-lg">
                            <h4 className={`${style.title}   mb-2 mb-lg-3  text-white text-uppercase fw-700 ff-secondary `}>Company</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <Link className={style.nav_link} href="/">About Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">FAQ’s</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg">
                            <h4 className={`${style.title} mb-2 mb-lg-3  text-white text-uppercase fw-700 ff-secondary `}>SHOP</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <Link className={style.nav_link} href="/">About Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">FAQ’s</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-6 col-lg">
                            <h4 className={`${style.title}  mb-2 mb-lg-3  text-white text-uppercase fw-700 ff-secondary `}>Customer Care</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <Link className={style.nav_link} href="/">About Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">FAQ’s</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-6 col-lg">
                            <h4 className={`${style.title}  mb-2 mb-lg-3  text-white text-uppercase fw-700 ff-secondary `}>Support</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <Link className={style.nav_link} href="/">About Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href="/">FAQ’s</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4 className={`${style.title}  mb-2 mb-lg-3  text-white text-uppercase fw-700 ff-secondary `}>Address</h4>
                            <address className='mb-4 mb-lg-4'>
                                Automatro .office, 109, 2nd Floor, Port Saeed BuildingOpp. Dubai Whole Sale PlazaMurshid Bazar, Deira, Dubai, UAETRN Number : 100430934800003
                            </address>

                            <h4 className={`${style.title}  mb-2 mb-lg-3 text-white text-uppercase fw-700 ff-secondary `}>support</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <a className={style.nav_link} href={`mailto:${"info@example.com"}`}>
                                        <span>
                                        <IoMailOutline />
                                        </span>
                                        info@example.com
                                    </a>
                                </li>
                                <li>
                                    <Link className={style.nav_link} href={`tel:${"(04) 259 5888"}`}>
                                        <span>
                                            <IoCallOutline />
                                        </span>
                                        (04) 259 5888
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={style.footer_credit}>
                <div className="container">
                    <div className="row ff-secondary">
                        <div className="col-lg">
                            <p className='mb-lg-0 fw-500'>Copyright © 2023 all right reserved</p>
                        </div>
                        <div className="col-lg text-lg-center">
                            <p className='mb-lg-0 fw-500'>Design & Developed By :  <a href="#" target='_blank'>Bashar</a></p>
                        </div>
                        <div className="col-lg text-lg-end"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


