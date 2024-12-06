"use client"
import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"
import course_data from "@/data/home-data/CourseDataTwo"
import InjectableSvg from "@/hooks/InjectableSvg"
import { useDispatch } from "react-redux"
import { addToWishlist } from "@/redux/features/wishlistSlice"

import course_img1 from "@/assets/img/courses/h3_course_shape01.svg"
import course_img2 from "@/assets/img/courses/h3_course_shape02.svg"
import course_img3 from "@/assets/img/courses/h3_course_shape03.svg"
import course_img4 from "@/assets/img/courses/h3_course_shape04.svg"

const Course = () => {

   const dispatch = useDispatch();
   // add to wishlist
   const handleAddToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
   };

   return (
      <section className="courses-area-two tg-motion-effects courses__bg" style={{ backgroundImage: `url(/assets/img/bg/h3_courses_bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Top Class Courses</span>
                     <h2 className="title">Choose Perfect Academic Courses</h2>
                     <p>when known printer took a galley of type scrambl edmake</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {course_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                     <div className="courses__item-four shine__animate-item">
                        <div className="courses__item-thumb-three shine__animate-link">
                           <Link href="/course-details"><Image src={item.thumb} alt="img" /></Link>
                           <span className="courses__price">${item.price}.00</span>
                        </div>
                        <div className="courses__item-content-three">
                           <ul className="courses__item-meta list-wrap">
                              <li className="courses__item-tag">
                                 <Link href="/courses">{item.tag}</Link>
                              </li>
                              <li className="courses__wishlist">
                                 <a onClick={() => handleAddToWishlist(item)} className="course-heart-btn" style={{ cursor: "pointer" }}><InjectableSvg src="/assets/img/icons/heart02.svg" alt="" className="injectable" /></a>
                              </li>
                           </ul>
                           <h2 className="title"><Link href="/course-details">{item.title}</Link></h2>
                           <div className="courses__review">
                              <div className="rating">
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                              </div>
                              <span>{item.review}</span>
                           </div>
                           <div className="courses__item-bottom-three">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-book"></i>{item.lesson}</li>
                                 <li><i className="flaticon-mortarboard"></i>Students {item.student}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="view__courses-btn text-center mt-30">
               <Link href="/courses" className="btn arrow-btn">See All Courses <BtnArrow /></Link>
            </div>
            <div className="courses__shape-wrap">
               <Image src={course_img1} alt="shape" className="tg-motion-effects1" />
               <Image src={course_img2} alt="shape" className="tg-motion-effects4" />
               <Image src={course_img3} alt="shape" className="alltuchtopdown" />
               <Image src={course_img4} alt="shape" className="tg-motion-effects5" />
            </div>
         </div>
      </section>
   )
}

export default Course
