import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import InstructorEnrolledCourseContent from "@/dashboard/instructor-dashboard/instructor-enrolled-courses/InstructorEnrolledCourseContent"

const StudentEnrolledCoursesArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <InstructorEnrolledCourseContent />
            </div>
         </div>
      </section>
   )
}

export default StudentEnrolledCoursesArea
