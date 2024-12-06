import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ProductDetailsArea from "./ProductDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const ProductDetails = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <BreadcrumbOne title="Shop Details" sub_title="Shop Details" />
        <ProductDetailsArea />
      </main>
      <FooterOne />
    </>
  )
}

export default ProductDetails
