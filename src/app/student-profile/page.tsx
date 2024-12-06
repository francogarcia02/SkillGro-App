import StudentProfile from "@/dashboard/student-dashboard/student-profile";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Profile SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentProfile />
      </Wrapper>
   )
}

export default index