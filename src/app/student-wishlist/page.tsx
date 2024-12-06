import StudentWishlist from "@/dashboard/student-dashboard/student-wishlist";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Student Wishlist SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <StudentWishlist />
      </Wrapper>
   )
}

export default index