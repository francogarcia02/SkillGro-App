import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import InstructorArea from "./InstructorArea"

const Instructors = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="All Instructors" sub_title="Instructors" />
            <InstructorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Instructors
