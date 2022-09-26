import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination";
import style from "../../styles/Detail.module.css";
import Arrow from "../../assets/detail/arrow.svg";
import Maps from "../../assets/detail/location.svg";
import Profile from "../../assets/louis.svg";
import Image from "next/image";

export default function Detail({}) {
  return (
    <Fragment>
      <Head>
        <title>Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={style.mainbody}>
        <div className={style.container}>
          <div className={style.searchbar}>
            <input placeholder="Search for any skill" />
            <div className="dropdown d-flex flex-row justify-content-center align-items-center">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="registerDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul class="dropdown-menu" aria-labelledby="registerDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Name
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Position
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Skill
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Location
                  </a>
                </li>
              </ul>
            </div>
            <button>Search</button>
          </div>
          <div className={style.main}>
            <div className={style.card}>
              <div className={style.profile}>
                <Image
                  src={Profile}
                  alt="profile"
                  className={style.profile_img}
                />
              </div>
              <div className={style.profiledetail}>
                <p
                  className="font-weight-bold "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                >
                  Louis Tomlinson
                </p>
                <p className="text-muted">Web Developer</p>
                <p className="text-muted">
                  <Image src={Maps} alt="location" />
                  <span className="ml-2">Tokyo, Japan</span>
                </p>
                <div className={style.skills}>
                  <div className={style.skill}>PHP</div>
                  <div className={style.skill}>Javascript</div>
                  <div className={style.skill}>HTML</div>
                </div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profile}>
                <Image
                  src={Profile}
                  alt="profile"
                  className={style.profile_img}
                />
              </div>
              <div className={style.profiledetail}>
                <p
                  className="font-weight-bold "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                >
                  Louis Tomlinson
                </p>
                <p className="text-muted">Web Developer</p>
                <p className="text-muted">
                  <Image src={Maps} alt="location" />
                  <span className="ml-2">Tokyo, Japan</span>
                </p>
                <div className={style.skills}>
                  <div className={style.skill}>PHP</div>
                  <div className={style.skill}>Javascript</div>
                  <div className={style.skill}>HTML</div>
                </div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profile}>
                <Image
                  src={Profile}
                  alt="profile"
                  className={style.profile_img}
                />
              </div>
              <div className={style.profiledetail}>
                <p
                  className="font-weight-bold "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                >
                  Louis Tomlinson
                </p>
                <p className="text-muted">Web Developer</p>
                <p className="text-muted">
                  <Image src={Maps} alt="location" />
                  <span className="ml-2">Tokyo, Japan</span>
                </p>
                <div className={style.skills}>
                  <div className={style.skill}>PHP</div>
                  <div className={style.skill}>Javascript</div>
                  <div className={style.skill}>HTML</div>
                </div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.profile}>
                <Image
                  src={Profile}
                  alt="profile"
                  className={style.profile_img}
                />
              </div>
              <div className={style.profiledetail}>
                <p
                  className="font-weight-bold "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                >
                  Louis Tomlinson
                </p>
                <p className="text-muted">Web Developer</p>
                <p className="text-muted">
                  <Image src={Maps} alt="location" />
                  <span className="ml-2">Tokyo, Japan</span>
                </p>
                <div className={style.skills}>
                  <div className={style.skill}>PHP</div>
                  <div className={style.skill}>Javascript</div>
                  <div className={style.skill}>HTML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.pagination}>
          <Pagination />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
