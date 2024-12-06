import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import BtnArrow from "@/svg/BtnArrow";

import instructor_thumb1 from "@/assets/img/instructor/instructor01.png"
import instructor_thumb2 from "@/assets/img/instructor/instructor02.png"
import instructor_thumb3 from "@/assets/img/instructor/instructor03.png"
import instructor_thumb4 from "@/assets/img/instructor/instructor04.png"

interface DataType {
   id: number;
   thumb: StaticImageData
   title: string;
   designation: string;
   rating: string;
}[];

const instructor_data: DataType[] = [
   {
      id: 1,
      thumb: instructor_thumb1,
      title: "Mark Jukarberg",
      designation: "UX Design Lead",
      rating: "(4.8 Ratings)"
   },
   {
      id: 2,
      thumb: instructor_thumb2,
      title: "Web Design",
      designation: "Olivia Mia",
      rating: "(4.8 Ratings)"
   },
   {
      id: 3,
      thumb: instructor_thumb3,
      title: "William Hope",
      designation: "Digital Marketing",
      rating: "(4.8 Ratings)"
   },
   {
      id: 4,
      thumb: instructor_thumb4,
      title: "Sophia Ava",
      designation: "Web Development",
      rating: "(4.8 Ratings)"
   },
];

const Instructor = () => {
   return (
      <section className="instructor__area">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="instructor__content-wrap">
                     <div className="section__title mb-15">
                        <span className="sub-title">Skilled Introduce</span>
                        <h2 className="title">Our Top Class & Expert Instructors in One Place</h2>
                     </div>
                     <p>when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries</p>
                     <div className="tg-button-wrap">
                        <Link href="/instructors" className="btn arrow-btn">See All Instructors<BtnArrow /></Link>
                     </div>
                  </div>
               </div>
               
               <div className="col-xl-8">
                  <div className="instructor__item-wrap">
                     <div className="row">
                        {instructor_data.map((item) => (
                           <div key={item.id} className="col-sm-6">
                              <div className="instructor__item">
                                 <div className="instructor__thumb">
                                    <Link href="/instructor-datails"><Image src={item.thumb} alt="img" /></Link>
                                 </div>
                                 <div className="instructor__content">
                                    <h2 className="title"><Link href="/instructor-datails">{item.title}</Link></h2>
                                    <span className="designation">{item.designation}</span>
                                    <p className="avg-rating">
                                       <i className="fas fa-star"></i>{item.rating}
                                    </p>
                                    <div className="instructor__social">
                                       <ul className="list-wrap">
                                          <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                          <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                          <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                                          <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Instructor
