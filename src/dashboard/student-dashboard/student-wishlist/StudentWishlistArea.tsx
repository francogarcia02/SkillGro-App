import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import InstructorWishlistContent from "@/dashboard/instructor-dashboard/instructor-wishlist/InstructorWishlistContent"

const StudentWishlistArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <InstructorWishlistContent />
            </div>
         </div>
      </section>
   )
}

export default StudentWishlistArea
