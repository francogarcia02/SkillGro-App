import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorSettingContent from "./InstructorSettingContent"

const InstructorSettingArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBanner />
            <div className="row">
               <DashboardSidebar />
               <InstructorSettingContent />
            </div>
         </div>
      </section>
   )
}

export default InstructorSettingArea
