import React from "react";
import Image from 'next/image'
import style from "../styles/Navbar.module.css"
import logo from "../assets/logo/logo-purple.svg"
import "../styles/Navbar.module.css"
import Link from "next/link";

const Navbar = ({href})=>{
    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <a className={`${style.img} navbar-brand`} href="#">
                <Image
                   src={logo}
                    alt="Logo"
                           
                />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
                
                </ul>
                <form className="d-flex justify-content-end">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                    <button className="btn btn-outline mx-2 land">Masuk</button>
                    <button className="btn btn-outline land" type="submit">Daftar</button>
                </form>
                </div>
            </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar