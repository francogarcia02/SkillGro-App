import BtnArrow from '@/svg/BtnArrow'
import Image from 'next/image'
import Link from 'next/link'
import CurvedCircle from './CurvedCircle'
import InjectableSvg from '@/hooks/InjectableSvg'

import choose_img1 from "@/assets/img/others/h4_choose_img.jpg"
import choose_img2 from "@/assets/img/others/h4_choose_img02.jpg"
import choose_img3 from "@/assets/img/others/h4_choose_shape.svg"

const Choose = () => {
   return (
      <section className="choose__area-two section-py-140 choose__bg" style={{ backgroundImage: `url(/assets/img/bg/h4_choose_bg.jpg)` }}>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-6 col-md-10">
                  <div className="choose__img-two">
                     <Image src={choose_img1} alt="img" />
                     <div className="circle__text-wrap">
                        <div className="icon">
                           <InjectableSvg src="/assets/img/icons/circle_icon.svg" alt="" className="injectable" />
                        </div>
                        <CurvedCircle />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="choose__content-two">
                     <div className="section__title mb-20">
                        <span className="sub-title">Why Choose Us</span>
                        <h2 className="title-two"><span>Trained</span> Your <strong><InjectableSvg src="/assets/img/icons/choose_icon.svg" alt="" className="injectable" /></strong> Body Mind <span>Through Our</span> Yoga</h2>
                     </div>
                     <p>When an unknown printer took a galley of type and scrambled it to make  cimen has survived not only five centurieswnknown.when an unknown printer took a galley of type.</p>
                     <div className="choose__content-inner">
                        <div className="row align-items-center gutter-20">
                           <div className="col-sm-5 order-0 order-sm-2">
                              <div className="choose__content-inner-img">
                                 <Image src={choose_img2} alt="img" />
                              </div>
                           </div>
                           <div className="col-sm-7">
                              <ul className="about__info-list list-wrap">
                                 <li className="about__info-list-item">
                                    <i className="flaticon-angle-right"></i>
                                    <p className="content">Body & Mind Stress Relief</p>
                                 </li>
                                 <li className="about__info-list-item">
                                    <i className="flaticon-angle-right"></i>
                                    <p className="content">Enhance Strength Growing</p>
                                 </li>
                                 <li className="about__info-list-item">
                                    <i className="flaticon-angle-right"></i>
                                    <p className="content">Get Better Posture</p>
                                 </li>
                              </ul>
                              <Link href="contact" className="btn arrow-btn">Check Schedule <BtnArrow /></Link>
                           </div>
                        </div>
                     </div>
                     <div className="shape">
                        <Image src={choose_img3} alt="shape" className="rotateme" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Choose
