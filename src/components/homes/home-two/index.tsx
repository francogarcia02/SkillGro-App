import FooterOne from "@/layouts/footers/FooterOne"
import Blog from "../home-one/Blog"
import CourseArea from "../home-one/CourseArea"
import InstructorTwo from "../home-one/InstructorTwo"
import About from "./About"
import Banner from "./Banner"
import Counter from "./Counter"
import EventArea from "./EventArea"
import Feature from "./Feature"
import Newsletter from "./Newsletter"
import WorkArea from "./WorkArea"
import BrandOne from "@/components/common/brands/BrandOne"
import Instructor from "./Instructor"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <Banner />
            <BrandOne style={true} />
            <Feature />
            <About />
            <CourseArea style={true} />
            <WorkArea />
            <Counter />
            <Instructor />
            <Newsletter />
            <EventArea />
            <Blog style={true} />
            <InstructorTwo style={true} />
         </main>
         <FooterOne style={true} />
      </>
   )
}

export default HomeTwo
