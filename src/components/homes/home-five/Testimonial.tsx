"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import InjectableSvg from '@/hooks/InjectableSvg';
import { Pagination } from 'swiper/modules';

import testi_img1 from "@/assets/img/others/h5_testimonial_img.png";
import testi_img2 from "@/assets/img/others/h5_testimonial_shape01.svg"
import testi_img3 from "@/assets/img/others/h5_testimonial_shape02.svg"
import testi_img4 from "@/assets/img/others/h5_testimonial_shape03.svg"
import testi_img5 from "@/assets/img/others/h5_testimonial_shape04.svg"
import testi_img6 from "@/assets/img/others/h5_testimonial_shape05.svg"

interface DataType {
   id: number;
   desc: string;
   title: string;
   designation: string;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
   {
      id: 2,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
   {
      id: 3,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
];

const setting = {
   slidesPerView: 1,
   spaceBetween: 30,
   observer: true,
   observeParents: true,
   loop: true,
   breakpoints: {
      '1500': {
         slidesPerView: 1,
      },
      '1200': {
         slidesPerView: 1,
      },
      '992': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '768': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   pagination: {
      el: '.testimonial-pagination',
      clickable: true,
   },
}

const Testimonial = () => {

   return (
      <section className="testimonial__area-four tg-motion-effects">
         <div className="testimonial__bg-shape-one">
            <InjectableSvg src="/assets/img/others/h5_testimonial_bg_shape01.svg" alt="" className="injectable" />
         </div>
         <div className="testimonial__bg-shape-two">
            <InjectableSvg src="/assets/img/others/h5_testimonial_bg_shape02.svg" alt="" className="injectable" />
         </div>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-7 order-0 order-lg-2">
                  <Swiper {...setting} modules={[Pagination]} className="swiper-container testimonial-active-four">
                     {testi_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="testimonial__item-four">
                              <div className="rating">
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                              </div>
                              <p>{item.desc}</p>
                              <div className="testimonial__bottom-two">
                                 <h4 className="title">{item.title}</h4>
                                 <span>{item.designation}</span>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                     <div className="testimonial-pagination testimonial-pagination-two"></div>
                  </Swiper>
               </div>
               <div className="col-lg-5 col-md-7">
                  <div className="testimonial__img-two">
                     <Image src={testi_img1} alt="img" />
                     <div className="shape">
                        <Image src={testi_img2} alt="shape" className="alltuchtopdown" />
                        <Image src={testi_img3} alt="shape" className="tg-motion-effects4" />
                        <Image src={testi_img4} alt="shape" className="tg-motion-effects3" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="testimonial__shape-wrap">
            <Image src={testi_img5} alt="shape" data-aos="fade-up" data-aos-delay="400" />
            <Image src={testi_img6} alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Testimonial
