import StudentReview from "@/dashboard/student-dashboard/student-review";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Review SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentReview />
      </Wrapper>
   )
}

export default index