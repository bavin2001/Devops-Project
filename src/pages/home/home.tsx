import Image from "next/image";
import { useEffect } from "react";

import "./style.scss";
import GirlWithPhone from "@app/assets/img/girlwith-phone.png";
import AdsIcon from "@app/assets/img/ads-icon.png";
import GirlImage from "@app/assets/img/girl-image.png";
import PlantImage from "@app/assets/img/plant-image.svg";
import WebIcon from "@app/assets/img/web-icon.png";
import BoyWithLaptop from "@app/assets/img/boywith-laptop.png";
import BannerImage from "@app/assets/img/banner-image.jpg";
import BannerImage2 from "@app/assets/img/banner-image2.jpg";
import BannerImage3 from "@app/assets/img/banner-image3.jpg";

export default function Home() {
 useEffect(() => {
  if (window.innerWidth > 1025) {
   document.addEventListener("mousemove", parallax);

  }
  function parallax(event: MouseEvent) {
   document.querySelectorAll(".parallax-wrap span").forEach((shift: Node) => {
    const position = 3;
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    (shift as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
   });
  }
 }, []);
 return (
  <section className="banner-wrapper-con">
   <div className="banner-shades-left">
    <div className="shades-left-middle">
     <div className="row">
      <div className="col-one">
       <div className="banner-icon-one">
        <Image
         src={GirlWithPhone}
         alt="Novavi"
        />
       </div>
      </div>
      <div className="col-two">
       <div className="banner-icon-two">
        <Image
         src={AdsIcon}
         alt="Novavi"
        />
       </div>
       <div className="banner-icon-three">
        <Image
         src={GirlImage}
         alt="novavi"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="banner-shades-right">
    <div className="shades-left-middle">
     <div className="row">
      <div className="col-one">
       <div className="banner-icon-five">
        <Image
         src={PlantImage}
         alt="Novavi"
        />
       </div>
       <div className="banner-icon-six">
        <Image
         src={WebIcon}
         alt="novai"
        />
       </div>
      </div>
      <div className="col-two">
       <div className="banner-icon-four">
        <Image
         src={BoyWithLaptop}
         alt="novavi"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
   <div
    className="carousel slide carousel-fade"
   >
    <div className="carousel-inner">
     <div className="carousel-item active">
      <div className="banner-caption-con parallax-wrap">
       <span className="parallax-span">
        <h2>
         Web <b>Designing</b> Brilliance Delivered<br />
          Right to You
        </h2>
       </span>
      </div>
      <Image
       src={BannerImage}
       alt="Novavi"
      />
     </div>
     <div className="carousel-item">
      <div className="banner-caption-con parallax-wrap">
       <span className="parallax-span">
        <h2>
         Digital <b>Marketing</b> Excellence at<br />
          Your Service
        </h2>
       </span>
      </div>
      <Image
       src={BannerImage2}
       alt="Novavi"
      />
     </div>
     <div className="carousel-item">
      <div className="banner-caption-con parallax-wrap">
       <span className="parallax-span">
        <h2>
         Crafting <b>Software</b> Solutions with <br />
         Expertise &amp; Precision
        </h2>
       </span>
      </div>
      <Image
       src={BannerImage3}
       alt="Novavi"
      />
     </div>
    </div>
   </div>
  </section>
 );
}