import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            <ErrorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default NotFound

