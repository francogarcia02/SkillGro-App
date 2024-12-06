"use client"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react"

import choose_thumb from "@/assets/img/others/h6_choose_img.jpg"

const Choose = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="choose__area-three section-pb-140">
            <div className="container">
               <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-10">
                     <div className="choose__img-three">
                        <Image src={choose_thumb} alt="img" />
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="play-btn popup-video"><i className="fas fa-play"></i></a>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="choose__content-three">
                        <div className="section__title mb-15">
                           <span className="sub-title">Why Choose Us</span>
                           <h2 className="title bold">Transform Your Language with Our Courses</h2>
                        </div>
                        <p>Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize anIn this episode of the Smashing Pod we’re talking about Web Platform Baseline.</p>
                        <div className="choose__list-wrap">
                           <div className="choose__list-item">
                              <div className="icon">
                                 <i className="skillgro-profit"></i>
                              </div>
                              <div className="content">
                                 <h4 className="title">Learn skills with 120k+</h4>
                                 <span>video courses.</span>
                              </div>
                           </div>
                           <div className="choose__list-item">
                              <div className="icon">
                                 <i className="flaticon-mortarboard"></i>
                              </div>
                              <div className="content">
                                 <h4 className="title">Choose courses taught by</h4>
                                 <span>real-world experts.</span>
                              </div>
                           </div>
                        </div>
                        <Link href="/lesson" className="btn arrow-btn btn-four">Start Free Trial <BtnArrow /></Link>
                     </div>
                  </div>
               </div>
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
