import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import swal1 from '../../assets/swal1.svg'
import Landing1 from "../../assets/home/landing1.svg";
import Landing2 from "../../assets/home/landing2.svg";
import Landing3 from "../../assets/home/landing3.svg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
//import { SwiperSlide } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () => {
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <Navbar />
        <div className="container ">
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              {/* <h2 className="mt-5">Telenta terbaik negri untuk perubahan revolusi 4.0</h2>
              <p className="mt-2">
                Lorem ipsum sit amet, consectetur adipiscing elit. In euismod
                ipsum et dui dui rhocus auctor
              </p>
              <button type="button" className="btn btn-primary mt-3">
                Mulai Dari Sekarang
              </button> */}

                <div className='contain-text mt-5'>
                  <h1 className="mt-5">Talenta terbaik negri untuk perubahan revolusi 4.0</h1><br/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  <button className='btn btn-custom me-5'>Mulai Dari Sekarang</button>
                </div>
            </div>
            <div className="col-6">
              <Image
                src={Landing1}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <Image
                src={Landing2}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="col-6 mt-5">
            
            <div className='contain-text mt-3'>
                <h1>Kenapa harus mencari tallent di peworld</h1>
                <ul className='daftar me-5'>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>

                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                </ul>
            </div>

            </div>
          </div>

          <div className="row mt-3 justify-content-center">
            <div className="col-6">

            <div className='contain-text2 mt-5'>
                <h1>Skill Tallent</h1>
                <span className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
                <div className='container_skill'>
                    <ul className='list-skill'>
                        <li><i className="bi bi-check-circle-fill text-color"/><span>Java</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> Kotlin</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> PHP</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> Javascrip</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> Golang</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> C++</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> Ruby</span></li>
                        <li><i className="bi bi-check-circle-fill text-color"/><span> 10+ Bahasa lainnya</span></li>
                        
                    </ul>
                </div>
            </div>

            </div>
            <div className="col-6">
              <Image
                src={Landing3}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className='container_content3'>
            <h1 className='text-center'>Their opinion about peworld</h1>

              <Swiper className='container container_swiper me-2'
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              pagination= {{clickable: true}}
              navigation= {true}
              >
              <SwiperSlide  className=''>
                  <div className='Card'>
                      <div className='bg-img'>
                          <div className="card-img ">
                              <Image src={swal1} className="img7"/>
                          </div>
                          
                      </div>
                      <div  className='card-text '>
                              <h3 className=''>Niall Horan</h3>
                              <span className='fw-light'>Web Developer</span>
                              <p className='w-75  ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide  className=''>
                  <div className='Card'>
                      <div className='bg-img'>
                          <div className="card-img ">
                              <Image src={swal1} className="img7"/>
                          </div>
                          
                      </div>
                      <div  className='card-text '>
                              <h3 className=''>Niall Horan</h3>
                              <span className='fw-light'>Web Developer</span>
                              <p className='w-75  ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide  className=''>
                  <div className='Card'>
                      <div className='bg-img'>
                          <div className="card-img ">
                              <Image src={swal1} className="img7"/>
                          </div>
                          
                      </div>
                      <div  className='card-text '>
                              <h3 className=''>Niall Horan</h3>
                              <span className='fw-light'>Web Developer</span>
                              <p className='w-75  ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide  className=''>
                  <div className='Card'>
                      <div className='bg-img'>
                          <div className="card-img ">
                              <Image src={swal1} className="img7"/>
                          </div>
                          
                      </div>
                      <div  className='card-text '>
                              <h3 className=''>Niall Horan</h3>
                              <span className='fw-light'>Web Developer</span>
                              <p className='w-75  ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide  className=''>
                  <div className='Card'>
                      <div className='bg-img'>
                          <div className="card-img ">
                              <Image src={swal1} className="img7"/>
                          </div>
                          
                      </div>
                      <div  className='card-text '>
                              <h3 className=''>Niall Horan</h3>
                              <span className='fw-light'>Web Developer</span>
                              <p className='w-75  ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                  </div>
              </SwiperSlide>
            
              
            </Swiper>
            
            {/* <ProfileOwl/> */}
            
        </div>

        <div className='container_content4 my-5'>
            
            <div className='container_img4 '>
                <div className=''>
                    <p className='text-white w-50 ms-5 fs-2'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='d-flex justify-content-end me-5'>
                    <button className='btn bg-white py-2 fs-5 btn3'>Mulai Dari Sekarang</button>
                </div>
            </div>
            
        </div>

        </div>
        <Footer />
      </Fragment>
    </div>
  );
};

export default Home;
