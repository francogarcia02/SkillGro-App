import Image from "next/image"
import Link from "next/link"

import icon from "@/assets/img/icons/google.svg"
import LoginForm from "@/forms/LoginForm"

const LoginArea = () => {
   return (
      <section className="singUp-area section-py-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="singUp-wrap">
                     <h2 className="title">Welcome back!</h2>
                     <p>Hey there! Ready to log in? Just enter your username and password below and you&apos;ll be back in action in no time. Let&apos;s go!</p>
                     <div className="account__social">
                        <Link href="#" className="account__social-btn">
                           <Image src={icon} alt="img" />
                           Continue with google
                        </Link>
                     </div>
                     <div className="account__divider">
                        <span>or</span>
                     </div>
                     <LoginForm />
                     <div className="account__switch">
                        <p>Don&apos;t have an account?<Link href="/registration">Sign Up</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default LoginArea
