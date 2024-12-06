import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import InstructorAttemptsContent from "@/dashboard/instructor-dashboard/instructor-attempts/InstructorAttemptsContent"

const StudentAttemptsArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <InstructorAttemptsContent />
            </div>
         </div>
      </section>
   )
}

export default StudentAttemptsArea
