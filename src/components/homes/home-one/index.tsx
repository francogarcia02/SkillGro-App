import BrandOne from "@/components/common/brands/BrandOne"
import Banner from "./Banner"
import About from "./About"
import CourseArea from "./CourseArea"
import Newsletter from "./Newsletter"
import Instructor from "./Instructor"
import Counter from "./Counter"
import FaqArea from "./FaqArea"
import Features from "./Features"
import InstructorTwo from "./InstructorTwo"
import Blog from "./Blog"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Categories from "./Categories"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix pb-4">
            <Banner />
            <Categories />
            {/*<BrandOne />*/}
            {/*<About />*/}
            <CourseArea />
            {/*<Newsletter />*/}
            {/*<Instructor />*/}
            <Counter />
            {/*<FaqArea />*/}
            {/*<Features />*/}
            {/*<InstructorTwo />*/}
            {/*<Blog />*/}
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
