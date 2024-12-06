import RegistrationForm from "@/forms/RegistrationForm"
import Link from "next/link"
import Image from "next/image"

import icon from "@/assets/img/icons/google.svg"

const RegistrationArea = () => {
   return (
      <section className="singUp-area section-py-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="singUp-wrap">
                     <h2 className="title">Create Your Account</h2>
                     <p>Hey there! Ready to join the party? We just need a few details from you to get <br /> started. Let&apos;s do this!</p>
                     <div className="account__social">
                        <Link href="#" className="account__social-btn">
                           <Image src={icon} alt="img" />
                           Continue with google
                        </Link>
                     </div>
                     <div className="account__divider">
                        <span>or</span>
                     </div>
                     <RegistrationForm />
                     <div className="account__switch">
                        <p>Already have an account?<Link href="/login">Login</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default RegistrationArea
