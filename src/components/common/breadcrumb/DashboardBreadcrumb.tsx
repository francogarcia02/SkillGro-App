import Image from "next/image"
import img_1 from "@/assets/img/others/breadcrumb_shape01.svg"
import img_2 from "@/assets/img/others/breadcrumb_shape02.svg"
import img_3 from "@/assets/img/others/breadcrumb_shape03.svg"
import img_4 from "@/assets/img/others/breadcrumb_shape04.svg"
import img_5 from "@/assets/img/others/breadcrumb_shape05.svg"

const DashboardBreadcrumb = () => {
   return (
      <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-three" style={{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.jpg)` }}>
         <div className="breadcrumb__shape-wrap">
            <Image src={img_1} alt="img" className="alltuchtopdown" />
            <Image src={img_2} alt="img" data-aos="fade-right" data-aos-delay="300" />
            <Image src={img_3} alt="img" data-aos="fade-up" data-aos-delay="400" />
            <Image src={img_4} alt="img" data-aos="fade-down-left" data-aos-delay="400" />
            <Image src={img_5} alt="img" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </div>
   )
}

export default DashboardBreadcrumb
