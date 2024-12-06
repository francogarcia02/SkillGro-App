import StudentHistory from "@/dashboard/student-dashboard/student-history";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student History SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentHistory />
      </Wrapper>
   )
}

export default index