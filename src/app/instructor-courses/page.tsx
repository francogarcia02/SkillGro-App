import InstructorCourses from "@/dashboard/instructor-dashboard/instructor-courses";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Instructor Courses SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <InstructorCourses />
      </Wrapper>
   )
}

export default index