import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import BlogArea from "../blog/BlogArea"

const BlogTwo = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Blog Left Sidebar" sub_title="Blogs" />
            <BlogArea style_1={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogTwo;

