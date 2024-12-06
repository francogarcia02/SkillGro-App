import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorHistoryContent from "./InstructorHistoryContent"

const InstructorHistoryArea = () => {
  return (
    <section className="dashboard__area section-pb-120">
      <div className="container">
        <DashboardBanner />
        <div className="row">
          <DashboardSidebar />
          <InstructorHistoryContent />
        </div>
      </div>
    </section>
  )
}

export default InstructorHistoryArea
