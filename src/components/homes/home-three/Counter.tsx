"use client"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"

import counter_shape1 from "@/assets/img/others/h3_fact_shape01.svg"
import counter_shape2 from "@/assets/img/others/h3_fact_shape02.svg"

const Counter = () => {
   return (
      <section className="fact__area-three fact__bg" style={{ backgroundImage: `url(/assets/img/bg/fact_bg.jpg)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5">
                  <div className="fact__content-wrap">
                     <h2 className="title">Explore Majors & <span>Programs</span></h2>
                     <p>Choose from 16 undergraduate and graduate majors Board and the Mississippi Universities Board with goal of promoting collaboration.</p>
                     <Link href="/contact" className="btn arrow-btn">Take a Tour <BtnArrow /></Link>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="fact__item-wrap-two">
                     <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6">
                           <div className="fact__item fact__item-two">
                              <h2 className="count"><Count number={5} />k</h2>
                              <p>Student Nationalities</p>
                           </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                           <div className="fact__item fact__item-two">
                              <h2 className="count"><Count number={70} />%</h2>
                              <p>International Students</p>
                           </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                           <div className="fact__item fact__item-two">
                              <h2 className="count"><Count number={12} />+</h2>
                              <p>Different Majors</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="fact__shape-wrap">
            <Image src={counter_shape1} alt="shape" className="alltuchtopdown" />
            <Image src={counter_shape2} alt="shape" className="rotateme" />
         </div>
      </section>
   )
}

export default Counter
