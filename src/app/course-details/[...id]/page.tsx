import CourseDetailsArea from "@/components/courses/course-details/CourseDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Course Details SkillGro - Online Courses & Education React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {

   return (
      <Wrapper>
         <HeaderOne />
         <main className="main-area fix">
            <CourseDetailsArea id={params.id} />
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index