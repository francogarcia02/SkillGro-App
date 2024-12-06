"use client"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"
import SvgAnimation from '@/hooks/SvgAnimation';

import cta_img1 from "@/assets/img/others/h8_cta_img.png"
import cta_img2 from "@/assets/img/others/h8_cta_shape.svg"

const Cta = () => {

   const svgIconRef = SvgAnimation('/assets/img/others/h8_cta_img_shape.svg');

   return (
      <section className="cta__area-four">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="cta__inner-wrap">
                     <div className="cta__img-three tg-svg" ref={svgIconRef}>
                        <Image src={cta_img1} alt="img" />
                        <span className="svg-icon"></span>
                     </div>
                     <div className="cta__content-three cta__content-four">
                        <div className="content__left">
                           <h2 className="title">Finding Your Right Courses</h2>
                           <p>roove’s intuitive shared inbox makes it easy for team member anIn this episo</p>
                        </div>
                        <Link href="/login" className="btn arrow-btn">GET sTARTED <BtnArrow /></Link>
                     </div>
                     <Image src={cta_img2} alt="shape" className="shape" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Cta
