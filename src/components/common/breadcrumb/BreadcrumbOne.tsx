import Image from "next/image"
import Link from "next/link";

import shape_1 from "@/assets/img/others/breadcrumb_shape01.svg";
import shape_2 from "@/assets/img/others/breadcrumb_shape02.svg";
import shape_3 from "@/assets/img/others/breadcrumb_shape03.svg";
import shape_4 from "@/assets/img/others/breadcrumb_shape04.svg";
import shape_5 from "@/assets/img/others/breadcrumb_shape05.svg";

const BreadcrumbOne = ({ title, sub_title, sub_title_2, style }: any) => {
   return (
      <section className="breadcrumb__area breadcrumb__bg" style={{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="breadcrumb__content">
                     <h3 className="title">{title}</h3>
                     <nav className="breadcrumb">
                        {
                           style ? (
                              <>
                                 <span property="itemListElement" typeof="ListItem">
                                    <Link href="/">Home</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span property="itemListElement" typeof="ListItem">
                                    <Link href="/events">{sub_title}</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span property="itemListElement" typeof="ListItem">{sub_title_2}</span>
                              </>
                           ) : (
                              <>
                                 <span property="itemListElement" typeof="ListItem">
                                    <Link href="/">Home</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span property="itemListElement" typeof="ListItem">{sub_title}</span>
                              </>
                           )
                        }
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
      </section>
   )
}

export default BreadcrumbOne
