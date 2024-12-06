import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import LoginArea from "./LoginArea"

const Login = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Student Login" sub_title="Login" />
            <LoginArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Login

