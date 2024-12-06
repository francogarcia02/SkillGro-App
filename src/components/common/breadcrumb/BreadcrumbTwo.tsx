import Image from "next/image"
import Link from "next/link";

import shape_1 from "@/assets/img/others/breadcrumb_shape01.svg";
import shape_2 from "@/assets/img/others/breadcrumb_shape02.svg";
import shape_3 from "@/assets/img/others/breadcrumb_shape03.svg";
import shape_4 from "@/assets/img/others/breadcrumb_shape04.svg";
import shape_5 from "@/assets/img/others/breadcrumb_shape05.svg";

const BreadcrumbTwo = ({ title, sub_title }: any) => {
   return (
      <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two" style={{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="breadcrumb__content">
                     <nav className="breadcrumb">
                        <span property="itemListElement" typeof="ListItem">
                           <Link href="/">Home</Link>
                        </span>
                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                        <span property="itemListElement" typeof="ListItem">
                           <Link href="/">{sub_title}</Link>
                        </span>
                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                        <span property="itemListElement" typeof="ListItem">{title}</span>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div className="breadcrumb__shape-wrap">
            <Image src={shape_1} alt="img" className="alltuchtopdown" />
            <Image src={shape_2} alt="img" data-aos="fade-right" data-aos-delay="300" />
            <Image src={shape_3} alt="img" data-aos="fade-up" data-aos-delay="400" />
            <Image src={shape_4} alt="img" data-aos="fade-down-left" data-aos-delay="400" />
            <Image src={shape_5} alt="img" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </div>
   )
}

export default BreadcrumbTwo
