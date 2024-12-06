import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"

import img_1 from "@/assets/img/icons/map_marker.svg"
import img_2 from "@/assets/img/icons/envelope.svg"

const HeaderTopTwo = () => {
   return (
      <div className="tg-header__top tg-header__top-two">
         <div className="container custom-container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <ul className="tg-header__top-info list-wrap">
                     <li><Image src={img_1} alt="Icon" /> <span>589 5th Ave, NY 10024, USA</span>
                     </li>
                     <li><Image src={img_2} alt="Icon" /> <Link href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</Link></li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <div className="tg-header__top-right">
                     <ul className="tg-header__top-social list-wrap">
                        <li>Follow Us On :</li>
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                     </ul>
                     <div className="tg-header__top-btn">
                        <Link href="/contact" className="btn arrow-btn">Get in Touch <BtnArrow /></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopTwo
