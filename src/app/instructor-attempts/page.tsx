import InstructorAttempts from "@/dashboard/instructor-dashboard/instructor-attempts";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Instructor Attempts SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <InstructorAttempts />
      </Wrapper>
   )
}

export default index