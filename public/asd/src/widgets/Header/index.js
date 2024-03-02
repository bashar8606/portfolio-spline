"use client"
import Image from "next/image";
import style from "./Header.module.scss"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiSearch, FiBookmark } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartItems } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { Modal } from "react-bootstrap";
import useHeader from "./useHeader";
import EnquireForm from "@/components/EnquireForm";
import { useState } from "react";


function Header() {
    let cartCount = useRecoilValue(CartItems);
    const { main, width, show, handleClose, handleShow, handleClose1, handleShow1, showOffcanvas } = useHeader({ style });





    return (
        <header className={`${style.header} fixed-top `} ref={main}>
            <Navbar onSelect={(e)=>{console.log(e,"logged")}} expand={"xl"} variant="light" className="">
                <Container>

                    <Link href="/" className='navbar-brand'>
                        <div className={`${style.logo} ratio `}>
                            <Image src={`/assets/images/logo.svg`} priority={true} fill alt="logo" />
                        </div>
                    </Link>
                    <Navbar.Toggle className={`border-0 px-0  ${style.header_toggle}`} onClick={handleShow1} aria-controls={`offcanvasNavbar-expand-xl`} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        placement="start"
                        show={showOffcanvas}
                        onHide={handleClose1}
                        
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                <div className={`${style.logo} ratio `}>
                                    <Image src={`/assets/images/logo.svg`} fill alt="logo icon" />
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto pe-xl-3 align-items-xl-center h-100">
                                {data?.map((item, i) => {
                                    return (
                                        <Link key={i} href={`${item?.url}`} className='nav-link' onClick={handleClose1}>{`${item?.label}`}</Link>
                                    )
                                })}
                                <button href="/" className='btn btn-secondary ' onClick={handleShow} >Contact us</button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


            <Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
                <Modal.Header closeButton className="border-bottom-0">
                </Modal.Header>
                <Modal.Body >
                    <EnquireForm />
                </Modal.Body>
            </Modal>
        </header>

    );
}

export default Header;



const data = [
    {
        label: "Home",
        url: "#"
    }, {
        label: "What we offer",
        url: "#whatweoffer"
    }, {
        label: "Our programs",
        url: "#ourprograms"
    }, {
        label: "About us",
        url: "#aboutus"
    },{
        label: "Why choose us",
        url: "#whychooseus"
    },
    // {
    //     label: "Testimonials",
    //     url: "#testimonials"
    // },
]

