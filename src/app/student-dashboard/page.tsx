import StudentDashboard from "@/dashboard/student-dashboard/student-dashboard";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Dashboard SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentDashboard />
      </Wrapper>
   )
}

export default index