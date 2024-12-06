import Banner from "./Banner"
import Features from "./Features"
import Choose from "./Choose"
import Course from "./Course"
import Video from "./Video"
import Instructor from "./Instructor"
import BrandOne from "@/components/common/brands/BrandOne"
import Event from "./Event"
import Blog from "./Blog"
import Cta from "./Cta"
import Testimonial from "./Testimonial"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderFour from "@/layouts/headers/HeaderFour"

const HomeFour = () => {
   return (
      <>
         <HeaderFour />
         <main className="main-area fix">
            <Banner />
            <Features />
            <Choose />
            <Course />
            <Video />
            <Instructor />
            <BrandOne />
            <Event />
            <Testimonial />
            <Blog />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeFour
