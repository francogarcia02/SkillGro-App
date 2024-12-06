import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import RegistrationArea from "./RegistrationArea"

const Registration = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Student SingUp" sub_title="SingUp" />
            <RegistrationArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Registration

