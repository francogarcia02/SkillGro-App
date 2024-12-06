"use client"
import Image from "next/image"

import newsletter_shape1 from "@/assets/img/others/h7_newsletter_shape01.svg"
import newsletter_shape2 from "@/assets/img/others/h7_newsletter_shape02.svg"

const Newsletter = () => {
   return (
      <section className="newsletter__area-three">
         <div className="container">
            <div className="newsletter__inner-wrap newsletter__inner-wrap-two">
               <h2 className="title">Start today and get certified in Fundamentals of Business Core</h2>
               <form onSubmit={(e) => e.preventDefault()} className="newsletter__form-two">
                  <input type="email" placeholder="Enter your e-mial" />
                  <button type="submit" className="btn arrow-btn">Subscribe Now</button>
               </form>
               <Image src={newsletter_shape1} alt="shape" data-aos="fade-down-right" data-aos-delay="400" className="shape shape-one" />
               <Image src={newsletter_shape2} alt="shape" className="shape shape-two rotateme" />
            </div>
         </div>
      </section>
   )
}

export default Newsletter
