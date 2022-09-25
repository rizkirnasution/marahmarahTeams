import React from 'react';
import Icon from '../../assets/logo/logo-purple-kicik.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar2.module.css'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="/home">
                    <Image src={Icon} alt="Logo Navbar"></Image>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="d-flex justify-content-end me-2" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`${styles.border_none} nav-item mx-3 my-1`}>
                                <Link href="/login">
                                <button className={`${styles.login} nav-link btn btn-outline-light reg me-3 w-100`} >Masuk</button>
                                </Link>
                            </li>
                            <li className={`${styles.border_none} nav-item mx-1 my-1`}>
                                <div className="dropdown">
                                <button
                                    className={`${styles.login} ${styles.color} nav-link dropdown-toggle btn btn-outline-light reg me-2 w-100`}
                                    type="button"
                                    id="registerDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Daftar
                                </button>
                                <ul className={`dropdown-menu ${styles.drop_down_custom} `} aria-labelledby="registerDropdown">
                                    <li>
                                    <Link href="/register/worker">
                                        <a className={`dropdown-item ${styles.color}`}>Pekerja</a>
                                    </Link>
                                    </li>
                                    <div className={`dropdown-divider ${styles.line}`}></div>
                                    <li>
                                    <Link href="/register/recruiter">
                                        <a className={`dropdown-item ${styles.color}`}>Perekrut</a>
                                    </Link>
                                    </li>
                                </ul>
                                </div>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar