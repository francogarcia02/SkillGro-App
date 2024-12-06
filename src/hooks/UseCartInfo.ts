'use client'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface CartItem {
   price: number;
   quantity: number;
}

interface CartSummary {
   quantity: number;
   total: number;
}

const UseCartInfo = () => {
   const [quantity, setQuantity] = useState<number>(0);
   const [total, setTotal] = useState<number>(0);

   const cartItems = useSelector((state: any) => state.cart.cart);

   useEffect(() => {
      const cart: CartSummary = cartItems.reduce(
         (cartTotal: CartSummary, cartItem: CartItem) => {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;

            cartTotal.total += itemTotal;
            cartTotal.quantity += quantity;

            return cartTotal;
         },
         {
            total: 0,
            quantity: 0,
         }
      );
      setQuantity(cart.quantity);
      setTotal(cart.total);
   }, [cartItems]);
   return {
      quantity,
      total,
   };
}

export default UseCartInfo
