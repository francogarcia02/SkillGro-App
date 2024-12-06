import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import InstructorSettingContent from "@/dashboard/instructor-dashboard/instructor-setting/InstructorSettingContent"

const StudentSettingArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <InstructorSettingContent style={true} />
            </div>
         </div>
      </section>
   )
}

export default StudentSettingArea
