import Count from "@/components/common/Count"
import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo"
import dashboard_count_data from "@/data/dashboard-data/DashboardCounterData"

const StudentDashboardArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="container">
            <DashboardBannerTwo />
            <div className="row">
               <DashboardSidebarTwo />
               <div className="col-lg-9">
                  <div className="dashboard__content-wrap dashboard__content-wrap-two">
                     <div className="dashboard__content-title">
                        <h4 className="title">Dashboard</h4>
                     </div>
                     <div className="row">
                        {dashboard_count_data.slice(0, 3).map((item) => (
                           <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
                              <div className="dashboard__counter-item">
                                 <div className="icon">
                                    <i className={item.icon}></i>
                                 </div>
                                 <div className="content">
                                    <span className="count"><Count number={item.count} /></span>
                                    <p style={{ marginTop: "14px" }}>{item.title}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default StudentDashboardArea
