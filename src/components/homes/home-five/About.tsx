import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"

import about_img1 from "@/assets/img/others/h5_about_img01.jpg"
import about_img2 from "@/assets/img/others/h5_about_img02.jpg"
import about_img3 from "@/assets/img/others/h5_about_img_shape01.svg"
import about_img4 from "@/assets/img/others/h5_about_img_shape02.svg"
import about_img5 from "@/assets/img/others/h5_about_img_shape03.svg"
import about_img6 from "@/assets/img/others/h5_about_shape02.png"
import about_img7 from "@/assets/img/others/h5_about_shape01.png"

const About = () => {
   return (
      <section className="about-area-five section-pb-140">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-6 col-md-8">
                  <div className="about__images-five">
                     <div className="about__mask-img-one">
                        <Image src={about_img1} alt="img" />
                     </div>
                     <div className="about__mask-img-two" data-aos="fade-right" data-aos-delay="200">
                        <Image src={about_img2} alt="img" />
                     </div>
                     <div className="shape">
                        <Image src={about_img3} alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
                        <Image src={about_img4} alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
                        <Image src={about_img5} alt="shape" className="rotateme" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="about__content-five">
                     <div className="section__title mb-15">
                        <span className="sub-title">Get More About Us</span>
                        <h2 className="title bold">Our passion is childhood, and we’re in kindergarten</h2>
                     </div>
                     <p>Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode of the Smashing Pod we’re talking about Web Platform Baseline.</p>
                     <ul className="about__info-list list-wrap">
                        <li className="about__info-list-item">
                           <i className="flaticon-angle-right"></i>
                           <p className="content">Quality School Schedule</p>
                        </li>
                        <li className="about__info-list-item">
                           <i className="flaticon-angle-right"></i>
                           <p className="content">Indoor/Outdoor Games for Little Kids</p>
                        </li>
                        <li className="about__info-list-item">
                           <i className="flaticon-angle-right"></i>
                           <p className="content">Supporting the Child’s Personality</p>
                        </li>
                     </ul>
                     <div className="about__content-bottom">
                        <Link href="/contact" className="btn arrow-btn">Start Free Trial <BtnArrow /></Link>
                        <div className="about__contact">
                           <div className="icon">
                              <i className="skillgro-phone-call"></i>
                              <svg width="61" height="57" viewBox="0 0 61 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M33.8271 1.03084C45.4231 1.45238 55.2747 9.02544 58.7825 19.8885C62.2129 30.5119 58.2066 41.852 49.1968 48.6277C39.3708 56.0171 26.0908 58.9731 15.8124 52.2032C4.34981 44.6532 -2.0548 30.6516 2.45508 17.8409C6.75857 5.61644 20.666 0.552417 33.8271 1.03084Z" stroke="currentcolor" strokeWidth="2" />
                              </svg>
                           </div>
                           <div className="content">
                              <Link href="tel:0123456789">+985 0059 500</Link>
                              <span>Call to Questions</span>
                           </div>
                        </div>
                     </div>
                     <div className="shape">
                        <Image src={about_img6} alt="shape" className="alltuchtopdown" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="about__shape">
            <Image src={about_img7} alt="shape" data-aos="fade-right" data-aos-delay="800" />
         </div>
      </section>
   )
}

export default About
