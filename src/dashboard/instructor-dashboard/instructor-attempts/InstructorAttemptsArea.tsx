import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorAttemptsContent from "./InstructorAttemptsContent"

const InstructorAttemptsArea = () => {
  return (
    <section className="dashboard__area section-pb-120">
      <div className="container">
        <DashboardBanner />
        <div className="row">
          <DashboardSidebar />
          <InstructorAttemptsContent />
        </div>
      </div>
    </section>
  )
}

export default InstructorAttemptsArea
