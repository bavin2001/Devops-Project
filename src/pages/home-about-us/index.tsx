import Image from "next/image";

import AboutImage from "@app/assets/img/about-image.png";
import "./style.scss";

export default function AboutUs() {
 return (
  <section className="aboutus-wrapper">
   <div className="container">
    <div className="aboutus-inner-container">
     <div className="about-items" data-aos="fade-up" data-aos-delay={200}>
      <div className="about-middle-align">
       <h2 className="homepage-heading">
        Empowering <b>Success</b> Through <br />
        Innovation &amp; Expertise
       </h2>
       <p>
        Novavi is a beacon of innovation and excellence in the digital
        realm. As a company with a steadfast commitment to pushing
        boundaries and redefining possibilities, we're on a mission to make
        a lasting impact in the world of technology and creativity. Our
        inception was rooted in the belief that every idea has the potential
        to transform into something extraordinary, and this belief continues
        to drive us forward. Novavi is a place where ideas flourish, and we
        work relentlessly to empower businesses and individuals to thrive in
        an ever-evolving digital landscape.
       </p>
       <a href="about-us/" className="more-btn readmorebtn">
        View More
        <span />
        <span />
       </a>
      </div>
     </div>
     <div
      className="col-lg-6 pl-lg-5 col-md-6"
      data-aos="fade-left"
      data-aos-delay={400}
     >
      <Image
       src={AboutImage}
       alt="Work Together"
      />
     </div>
    </div>
   </div>
  </section>

 );
}