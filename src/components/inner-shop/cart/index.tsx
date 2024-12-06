import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import dynamic from "next/dynamic"
const CartArea = dynamic(() => import("./CartArea"), { ssr: false });

const Cart = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <BreadcrumbOne title="Cart" sub_title="Cart" />
            <CartArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Cart
