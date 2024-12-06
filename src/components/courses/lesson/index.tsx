import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import LessonArea from "./LessonArea"

const Lesson = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <LessonArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Lesson
