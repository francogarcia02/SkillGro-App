import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import EventArea from "./EventArea"

const Event = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="All Events" sub_title="Events" />
            <EventArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Event

