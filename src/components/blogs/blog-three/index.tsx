import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import BlogThreeArea from "./BlogThreeArea"

const BlogThree = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Blog Full Width" sub_title="Blogs" />
            <BlogThreeArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogThree;

