import Image from "next/image";
import Link from "next/link";

import category_img1 from "@/assets/img/others/h7_categories_shape01.svg"
import category_img2 from "@/assets/img/others/h7_categories_shape02.svg"
import category_img3 from "@/assets/img/others/h7_categories_shape03.svg"
import category_img4 from "@/assets/img/others/h7_categories_shape04.svg"

interface DataType {
   id: number;
   icon: string;
   title: string;
   tag: string;
}[];

const categories_data: DataType[] = [
   {
      id: 1,
      icon: "skillgro-satchel",
      title: "Business",
      tag: "2 Courses",
   },
   {
      id: 2,
      icon: "skillgro-taxes",
      title: "Tax Advisory",
      tag: "52 Courses",
   },
   {
      id: 3,
      icon: "skillgro-finance",
      title: "Finance",
      tag: "44 Courses",
   },
   {
      id: 4,
      icon: "skillgro-law",
      title: "Law",
      tag: "32 Courses",
   },
];

const Categories = () => {
   return (
      <section className="categories-area-three fix section-pt-140 section-pb-110 categories__bg" style={{ backgroundImage: `url(/assets/img/bg/categories_bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Our Top Categories</span>
                     <h2 className="title bold">Your Creative and Passionate Business Coach</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {categories_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-sm-6">
                     <div className="categories__item-three">
                        <Link href="/courses">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <span className="name">{item.title}</span>
                           <span className="courses">{item.tag}</span>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="categories__shape-wrap">
            <Image src={category_img1} alt="shape" className="rotateme" />
            <Image src={category_img2} alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
            <Image src={category_img3} alt="shape" className="alltuchtopdown" />
            <Image src={category_img4} alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Categories
