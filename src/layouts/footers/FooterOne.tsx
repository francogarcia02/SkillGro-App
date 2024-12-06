import Social from "@/components/common/Social"
import FooterCommon from "./FooterCommon"
import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/img/others/google-play.svg"
import icon_2 from "@/assets/img/others/apple-store.svg"

const FooterOne = ({ style, style_2 }: any) => {
   return (
      <footer className={`footer__area ${style_2 ? "footer__area-five" : style ? "footer__area-two" : ""}`}>
         <div className={`footer__top ${style_2 ? "footer__top-three" : ""}`}>
            <div className="container">
               <div className="row">
                  <FooterCommon />
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Get In Touch</h4>
                        <div className="footer__contact-content">
                           <p>when an unknown printer took <br /> galley type and scrambled</p>
                           <ul className="list-wrap footer__social">
                              <Social />
                           </ul>
                        </div>
                        <div className="app-download">
                           <Link href="#"><Image src={icon_1} alt="img" /></Link>
                           <Link href="#"><Image src={icon_2} alt="img" /></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {style_2 && <div className="footer__shape" style={{ backgroundImage: `url(/assets/img/others/h8_footer_shape.svg)` }}></div>}
         </div>
         
         <div className={`footer__bottom ${style_2 ? "footer__bottom-four" : ""}`}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <div className="copy-right-text">
                        <p>© 2010-2024 skillgro.com. All rights reserved.</p>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="footer__bottom-menu">
                        <ul className="list-wrap">
                           <li><Link href="/contact">Term of Use</Link></li>
                           <li><Link href="/contact">Privacy Policy</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
