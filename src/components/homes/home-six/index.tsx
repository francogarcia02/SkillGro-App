import FooterOne from "@/layouts/footers/FooterOne"
import Banner from "./Banner"
import Categories from "./Categories"
import Choose from "./Choose"
import Courses from "./Courses"
import Faq from "./Faq"
import Counter from "../home-two/Counter"
import Blog from "./Blog"
import Testimonial from "./Testimonial"
import HeaderSix from "@/layouts/headers/HeaderSix"

const HomeSix = () => {
   return (
      <>
         <HeaderSix />
         <main className="main-area fix">
            <Banner />
            <Categories />
            <Choose />
            <Courses />
            <Faq />
            <Testimonial />
            <Counter style={true} />
            <Blog />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeSix
