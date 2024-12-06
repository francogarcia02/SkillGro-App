import { selectProducts } from "@/redux/features/productSlice";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

interface ProductTopProps {
   startOffset: number;
   endOffset: number;
   totalItems: number;
   setProducts: (products: any[]) => void;
}

const ProductTop = ({ startOffset, endOffset, totalItems, setProducts }: ProductTopProps) => {

   const allProducts = useSelector(selectProducts);
   const filteredAllProduct = allProducts
   const [selected, setSelected] = useState('');

   const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const select = event.target.value;
      setSelected(select);

      let sortedProducts = [...filteredAllProduct];

      switch (select) {
         case 'popular':
            sortedProducts = sortedProducts
               .filter(item => item.hot_product)
               .sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            break;
         case 'price':
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
            break;
         case 'rating':
            sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
         default:
            sortedProducts = filteredAllProduct;
            break;
      }
      setProducts(sortedProducts);
   };

   return (
      <div className="shop-top-wrap">
         <div className="row align-items-center">
            <div className="col-md-6 col-sm-7">
               <div className="shop-top-left">
                  <p>Showing {startOffset}-{endOffset} of {totalItems} Results</p>
               </div>
            </div>
            <div className="col-md-6 col-sm-5">
               <div className="shop-top-right">
                  <select onChange={selectHandler} value={selected} name="orderby" className="orderby">
                     <option value="">Default sorting</option>
                     <option value="popular">Sort by popularity</option>
                     <option value="price">Sort by price</option>
                     <option value="rating">Sort by rating</option>
                  </select>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductTop;
