import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorProfileContent from "./InstructorProfileContent"

const InstructorProfileArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBanner />
            <div className="row">
               <DashboardSidebar />
              <InstructorProfileContent />
            </div>
         </div>
      </section>
   )
}

export default InstructorProfileArea
