import React from 'react'
import Image from "next/image"
import baner1 from '../../assets/image/baner1.svg'
import banerBg from '../../assets/image/baner-bg1.svg'
import baner2 from '../../assets/image/baner2.svg'
import swal1 from '../../assets/image/swal1.svg'
import baner3 from '../../assets/image/baner3.svg'
import test from '../../assets/image/test.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';



function Baner() {
  return (
    <div className='container'>
        <div className='container_content'>
            <div className='contain-text'>
                <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <button className='btn btn-custom'>Mulai Dari Sekarang</button>
            </div>
            <div className='container_img'>
                <div className='bg'>
                </div>
                <div className='contain-img'>
                    <Image src={baner1} />
                </div>
                <div className='img'>
                    <Image src={banerBg}/>
                </div>
            </div>
            
        </div>
        <div className='container_content1 '>
            <div className='container_img'>
                <div className='bg1'>
                </div>
                <div className='contain-img1'>
                    <Image src={baner2} />
                </div>
                <div className='img '>
                    {/* <Image src={banerBg}/> */}
                </div>
            </div>
            <div className='contain-text'>
                <h1>Kenapa harus mencari tallent di peworld</h1>
                <ul className='daftar'>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>

                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                    <li><i className="bi bi-check-circle-fill"/><span> Lorem ipsum dolor sit amet.</span></li>
                </ul>
            </div>
            
            
        </div>
        <div className='container_content2 mb-5'>
            <div className='contain-text2'>
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
            <div className='container_img mt-5'>
                <div className='bg2'>
                </div>
                <div className='contain-img3'>
                    <Image src={baner3} />
                </div>
                <div className='img'>
                    {/* <Image src={banerBg}/> */}
                </div>
            </div>
            
        </div>

        <div className='container_content3'>
            <h1 className='text-center'>Their opinion about peworld</h1>
        <Swiper className='container container_swiper'
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
  )
}

export default Baner;