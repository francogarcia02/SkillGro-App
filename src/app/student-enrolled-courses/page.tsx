import StudentEnrolledCourses from "@/dashboard/student-dashboard/student-enrolled-courses";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Dashboard SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentEnrolledCourses />
      </Wrapper>
   )
}

export default index