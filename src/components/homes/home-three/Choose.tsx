"use client"
import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react"

import choose_img1 from "@/assets/img/others/choose_img.jpg"
import choose_img2 from "@/assets/img/others/choose_shape03.svg"
import choose_img3 from "@/assets/img/others/choose_shape01.svg"
import choose_img4 from "@/assets/img/others/choose_shape02.svg"

const Choose = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="choose__area tg-motion-effects section-py-140">
            <div className="container">
               <div className="choose__inner-wrap">
                  <div className="row">
                     <div className="col-lg-5 order-0 order-lg-2">
                        <div className="choose__img" data-aos="fade-left" data-aos-delay="300">
                           <Image src={choose_img1} alt="img" />
                           <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="fas fa-play"></i></a>
                        </div>
                     </div>
                     <div className="col-lg-7">
                        <div className="choose__content">
                           <div className="section__title mb-15">
                              <span className="sub-title">Why Choose Our Campus</span>
                              <h2 className="title">Get Your Quality Skills Certificate Online Exam</h2>
                           </div>
                           <p>when an unknown printer took a galleytype and scrambled makespecimen book has survived</p>
                           <ul className="about__info-list list-wrap">
                              <li className="about__info-list-item">
                                 <i className="flaticon-angle-right"></i>
                                 <p className="content">The Most World Class Instructors</p>
                              </li>
                              <li className="about__info-list-item">
                                 <i className="flaticon-angle-right"></i>
                                 <p className="content">Access Your Class anywhere</p>
                              </li>
                              <li className="about__info-list-item">
                                 <i className="flaticon-angle-right"></i>
                                 <p className="content">Flexible Course Plan</p>
                              </li>
                           </ul>
                           <Link href="/about-us" className="btn arrow-btn">Read More <BtnArrow /></Link>
                           <div className="shape">
                              <Image src={choose_img2} alt="shape" className="tg-motion-effects3" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="choose__shape">
               <Image src={choose_img3} alt="shape" className="tg-motion-effects4" />
               <Image src={choose_img4} alt="shape" className="tg-motion-effects5" />
            </div>
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
      </>
   )
}

export default Choose
