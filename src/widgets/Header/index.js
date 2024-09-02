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




function Header() {
    let cartCount = useRecoilValue(CartItems);
    return (
        <>
            <header className={`${style.header} fixed-top `}>
                <Navbar expand={"xl"} variant="light"  className="">
                    <Container>
                        <Navbar.Toggle className={`border-0 px-0 me-3 ${style.header_toggle}`} aria-controls={`offcanvasNavbar-expand-xl`} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </Navbar.Toggle>
                        <Link href="/" className='navbar-brand text-white fw-500'>
                            Bashar.                         
                        </Link>


                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-xl`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                             
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="mx-auto  py-lg-2 px-lg-2 align-items-xl-center h-100">
                                    <Link href="/" className='nav-link active'>Home</Link>
                                    <Link href="/products" className='nav-link'>About me</Link>
                                    <Link href="/products" className='nav-link'>Works</Link>
                                    <Link href="/" className='nav-link'>Blogs</Link>
                                    <Link href="/" className='btn btn-primary w-100 d-xl-none mt-auto'>Contact us</Link>
                                    {/* <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-xl`}
                                >
                                    <Link href="/" className='dropdown-item'>Home</Link>
                                </NavDropdown> */}
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <Nav className={`${style.toolbar} flex-row ms-auto ms-xl-0 align-items-center`}>
                            <Link href={'/login'} className="btn btn-sm btn-white d-none d-lg-inline-block">Connect me</Link>
                        </Nav>

                    </Container>
                </Navbar>
            </header>


        </>
    );
}

export default Header;





