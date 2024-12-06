import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import InstructorProfileContent from "@/dashboard/instructor-dashboard/profile/InstructorProfileContent"

const StudentProfileArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <div className="col-lg-9">
                  <InstructorProfileContent style={true} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default StudentProfileArea
