import { useSelector } from "react-redux";

const TotalCart = () => {
   const productItem = useSelector((state: any) => state.cart.cart);

   return (
      <>
         <span className="mini-cart-count">{productItem.length}</span>
      </>
   )
}

export default TotalCart
