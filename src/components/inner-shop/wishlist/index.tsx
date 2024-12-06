import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import WishlistArea from "./WishlistArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Wishlist = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Wishlist" sub_title="Wishlist" />
            <WishlistArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Wishlist
