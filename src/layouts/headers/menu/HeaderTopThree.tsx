import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/img/icons/map_marker.svg"
import icon_2 from "@/assets/img/icons/map_marker.svg"

const HeaderTopThree = () => {
   return (
      <div className="tg-header__top">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <ul className="tg-header__top-info list-wrap">
                     <li><Image src={icon_1} alt="Icon" /> <span>589 5th Ave, NY 10024, USA</span></li>
                     <li><Image src={icon_2} alt="Icon" /> <Link href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</Link></li>
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopThree
