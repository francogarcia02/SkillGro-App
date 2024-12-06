"use client"
import Image from "next/image"
import Link from "next/link"
import course_data from "@/data/home-data/CourseDataTwo"
import InjectableSvg from "@/hooks/InjectableSvg"
import { useDispatch } from "react-redux"
import { addToWishlist } from "@/redux/features/wishlistSlice"

import course_img1 from "@/assets/img/courses/h5_courses_shape01.svg"
import course_img2 from "@/assets/img/courses/h5_courses_shape02.svg"
import course_img3 from "@/assets/img/courses/h5_courses_shape03.svg"
import course_img4 from "@/assets/img/courses/h5_courses_shape04.svg"

const Courses = () => {

   const dispatch = useDispatch();
   // add to wishlist
   const handleAddToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
   };

   return (
      <section className="courses-area-four courses__bg-three" style={{ backgroundImage: `url(/assets/img/bg/h5_courses_bg.jpg)` }}>
         <div className="courses__bg-shape-one">
            <InjectableSvg src="/assets/img/courses/h5_courses_bg_shape01.svg" alt="" className="injectable" />
         </div>
         <div className="courses__bg-shape-two">
            <InjectableSvg src="/assets/img/courses/h5_courses_bg_shape02.svg" alt="" className="injectable" />
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Top Class Courses</span>
                     <h2 className="title bold">Get The Best Exciting Class Experience With us</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {course_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                     <div className="courses__item-six shine__animate-item">
                        <div className="courses__item-thumb-five shine__animate-link">
                           <Link href="/course-details"><Image src={item.thumb} alt="img" /></Link>
                           <a onClick={() => handleAddToWishlist(item)} className="courses__wishlist-two course-heart-btn" style={{ cursor: "pointer" }}><InjectableSvg src="/assets/img/icons/heart02.svg" alt="" className="injectable" /></a>
                        </div>
                        <div className="courses__item-content-five">
                           <ul className="courses__item-meta list-wrap">
                              <li className="courses__review courses__review-two">
                                 <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </div>
                                 <span>{item.review}</span>
                              </li>
                              <li className="price">${item.price}</li>
                           </ul>
                           <h2 className="title"><Link href="/course-details">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                           <div className="courses__item-content-bottom-two">
                              <ul className="list-wrap">
                                 <li>
                                    <div className="icon">
                                       <i className="skillgro-happiness"></i>
                                    </div>
                                    <p><span>Age:</span>{item.student} Years</p>
                                 </li>
                                 <li>
                                    <div className="icon">
                                       <i className="skillgro-time"></i>
                                    </div>
                                    <p><span>Time: </span>{item.lesson}</p>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="courses__shape-wrap-three">
            <Image src={course_img1} alt="shape" data-aos="fade-right" data-aos-delay="400" />
            <Image src={course_img2} alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
            <Image src={course_img3} alt="shape" className="alltuchtopdown" />
            <Image src={course_img4} alt="shape" data-aos="fade-up-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Courses
