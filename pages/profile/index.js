import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../components/navbar/NavbarDetail";
import styles from '../../styles/Profile.module.css'
import Porto from "../../components/portofolio/index";
import Pengalaman from "../../components/pengalamankerja/index";
import Footer from '../../components/footer/Footer'
import Image from "next/image";
import PhotoProfile from "../../assets/profile.svg";
import Link from "next/link";

import axios from "axios";

const Profile = () => {
  const [data, setData] = useState("");
  const [skill, setSkill] = useState([])
  function fetch(){
    axios.get("http://localhost:3004/profile")
    .then(res =>{
      setSkill(res.data.skill) 
      setData(res.data)})
  }
  useEffect(()=>{
    fetch()
})
  
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <Link href="/edit-profile">
                  <Image
                    src={PhotoProfile}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt="Photo Profile"
                  />
                  </Link>
                  <h3>{data.name}</h3>
                  <h5>{data.jobSkill}</h5>
                  <p>{data.location}</p>
                  <p>{data.job}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>

                  <button className={`btn ${styles.btn_custom}`}>Hire</button>

                    <p className="fw-1 fw-bold mt-5">Skill</p>
                    <div className="container text-center">
                      <div className="row gy-2">
                         
                          {/* <div className="d-flex"> */}
                        {skill.length > 0 ?
                        skill.map((item) =>(
                          // eslint-disable-next-line react/jsx-key
                          <div className="col-4" >
                          <div>
                            <button className="btn bg-warning me-1 mt-2">{item}</button>
                          </div>
                        </div>
  
                        )): "Loadingg"
                      }
                      {/* </div> */}
                    </div>
                        
        
                      {/* </div> */}
                    </div>

                        <ul className="d-flex flex-column mt-5">
                          <li><i class="bi bi-envelope "/> rizkirnasution@gmail.com</li>
                          <li><i class="bi bi-instagram "/> @rahasia</li>
                          <li><i class="bi bi-github "/> @rizkirnasution</li>
                          <li><i class="bi bi-linkedin "/> @rizkiromadhonanasution</li>
                        </ul>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <div className="utama">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Portofolio
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Pengalaman Kerja
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mt-5" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <Porto />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <Footer/>
    </div>
  );
};

export default Profile;
