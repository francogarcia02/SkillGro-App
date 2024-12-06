import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"

import cta_img1 from "@/assets/img/others/h7_cta_img.png"
import cta_img2 from "@/assets/img/others/h7_cta_shape.svg"

const Cta = () => {

   return (
      <section className="cta__area-three">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="cta__bg-three" style={{ backgroundImage: `url(/assets/img/bg/h7_cta_bg.jpg)` }}>
                     <div className="cta__img-two">
                        <Image src={cta_img1} alt="img" />
                     </div>
                     <div className="cta__content-three">
                        <div className="content__left">
                           <h2 className="title">Finding Your Right Courses</h2>
                           <p>intuitive shared inbox makes it easy for team member</p>
                        </div>
                        <Link href="/login" className="btn arrow-btn">GET sTARTED <BtnArrow /></Link>
                     </div>
                     <div className="cta__shape-two">
                        <Image src={cta_img2} alt="shape" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Cta
