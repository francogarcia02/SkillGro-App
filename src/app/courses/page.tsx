import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Course SkillGro - Online Courses & Education React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <Course />
      </Wrapper>
   )
}

export default page