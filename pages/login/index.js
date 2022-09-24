import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Background from "../../assets/login/login.png"
import Logo from "../../assets/logo/logo-white.svg";
// import PasswordInput from "../../atoms/PasswordInput";

export default function LoginForm({

}) {
  return (

  <>
  <div className={styles.body}>


  <div className="container-fluid py-3 ">

    <div className="d-flex align-items-center justify-content-center ms-3">
        <div className={styles.backdroplogin}>
          <div className="mt-4 me-3">
            <Image
            className={styles.logo}
              src={Logo}
              height={30}
              alt="Logo"
            />
          </div>
          <div className="mt-5 py-5">
            <h1 className="text-white mx-5">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          </div>
        </div>
        <div className="container ">
          <div className="column d-flex align-items-center justify-content-start">
            <form className="login text-center w-100">
              <h1 className="text-center title-text">
                <b>Halo, Pweapeople</b>
              </h1>
              <p className="subtitle-text text-center my-4">
                Login into your existing account
              </p>
              <label className={styles.inputLabelText} htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="login form-control my-2 mb-4"
            
                placeholder="email"
          
              />
              <label className={styles.inputLabelText} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="login form-control my-2"
            
                placeholder="Password"
          
              />
              <div className="mb-4">
                <label className="forgot-password-text float-end mt-2">
                  Forgot password?
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-warning submit text-white w-100 mt-3"
              
              >
                Login
              </button>
              <br />
              <label className="dont-have-an-account-text align-self-center">
                Dont You Have An Account?
                <Link className="signup-text ms-1" href="/register">
                  Sign Up Here
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>

    </div>

  </div>
   
    
  </>
    
  );
}