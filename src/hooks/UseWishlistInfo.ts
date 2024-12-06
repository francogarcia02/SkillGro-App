"use client"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UseWishlistInfo = () => {
   const [wishlistItems, setWishlistItems] = useState([]);
   const wishlist = useSelector((state: any) => state.wishlist.wishlist);

   useEffect(() => {
      setWishlistItems(wishlist);
   }, [wishlist]);

   return {
      wishlistItems,
   };
}

export default UseWishlistInfo;
