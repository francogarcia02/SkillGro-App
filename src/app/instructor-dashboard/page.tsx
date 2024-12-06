import DashboardHome from "@/dashboard/instructor-dashboard/dashboard-home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Instructor Home SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <DashboardHome />
      </Wrapper>
   )
}

export default index