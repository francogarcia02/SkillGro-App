import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorEnrolledCourseContent from "./InstructorEnrolledCourseContent"

const InstructorEnrolledCourseArea = ({style}:any) => {

  return (
    <section className="dashboard__area section-pb-120">
      <div className="container">
        <DashboardBanner />
        <div className="row">
          <DashboardSidebar />
          <InstructorEnrolledCourseContent style={style} />
        </div>
      </div>
    </section>
  )
}

export default InstructorEnrolledCourseArea
