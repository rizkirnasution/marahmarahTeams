import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar/NavbarDetail";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination";
import style from "../../styles/Detail.module.css";
import Arrow from "../../assets/detail/arrow.svg";
import Maps from "../../assets/detail/location.svg";
import Profile from "../../assets/louis.svg";
import Image from "next/image";
import axios from "axios"
import Link from "next/link";

export default function Detail({}) {
  const [data, setData] = useState("");
    const [skill, setSkill] = useState("")
    const fetch = async() =>{
        const result = await axios.get("http://localhost:3004/users")
        
        setData(result.data)
        // setSkill(result.data[0].skill)
        // data.map(item =>{
        //     setSkill(item.skill)
        // })
    }
    useEffect(()=>{
        fetch()
  })
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
                class="btn btn-warning dropdown-toggle"
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
                  Sortir berdasarkan Nama
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Sortir berdasarkan Position
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Sortir berdasarkan Skill
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Sortir berdasarkan Location
                  </a>
                </li>
              </ul>
            </div>
            <button>Search</button>
          </div>
          <div className={style.main}>
         
            {data.length > 0 ? 
              data.map((item, index) =>{
                return(
            <div className={style.card} key={index}>
                <Link href='/profile'>
                    <div className={style.profile}>
                    <Image
                    src={Profile}
                    alt="profile"
                    className={style.profile_img}
                    />
                </div>
                </Link>
              
              <div className={style.profiledetail}>
                <p
                  className="font-weight-bold "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                >
                  {item.name}
                </p>
                <p className="text-muted">{item.job}</p>
                <p className="text-muted">
                  <Image src={Maps} alt="location" />
                  <span className="ml-2">{item.address}</span>
                </p>
                <div className={style.skills} >
                {item.skill.length > 0 ?
                item.skill.map((item, index) =>{
                return(
                      <div className={style.skill} key={index}>{item}</div>
                      )
                    }): "loadding"
                    
                }
                </div>
              </div>
            </div>

                )

                }):(
                    <div>Loading...</div>
                    )
                }
            {/* <div className={style.card}>
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
            </div> */}
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
