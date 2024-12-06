import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import ProductDetailsArea from "@/components/inner-shop/product-details/ProductDetailsArea";
import product_data from "@/data/inner-data/InnerCourseData";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Shop Details SkillGro - Online Courses & Education React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {

   const products = product_data;
   const single_product = products.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Course Details" sub_title="Course Details" />
            <ProductDetailsArea single_product={single_product} />
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index