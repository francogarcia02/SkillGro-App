import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import InstructorDetailsArea from "./InstructorDetailsArea"
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"

const InstructorsDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbTwo title="Robert Fox" sub_title="Instructors" />
            <InstructorDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default InstructorsDetails
