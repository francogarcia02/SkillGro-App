import InstructorAssignment from "@/dashboard/instructor-dashboard/instructor-assignment";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Instructor Assignment SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <InstructorAssignment />
      </Wrapper>
   )
}

export default index