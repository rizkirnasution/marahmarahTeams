import profile1 from '../../assets/harry.svg'
import profile2 from '../../assets/nial.svg'
import profile3 from '../../assets/louis.svg'
import Image from "next/image";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Carousel = () => {
  const options = {
    loop: true,
    center: true,
    margin: 30,
    items: 3,
    responsive:{
      600:{
          items:1
      }
    },
    autoWidth:true,
    autoplay: true
  };
  return (
    <div className="container mt-5 md-3">
          <OwlCarousel className="owl-theme mt-5" {...options}>
      <div className="item mt-5">
        <Image src={profile1} alt='' />
      </div>
      <div className="item mt-5">
      <Image src={profile2} alt='' />
      </div>
      <div className="item mt-5">
      <Image src={profile3} alt='' />
      </div>
     

    </OwlCarousel>
    </div>

  );
};
export default Carousel;
