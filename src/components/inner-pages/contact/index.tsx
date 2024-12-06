import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Contact With Us" sub_title="Contact" />
            <ContactArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Contact

