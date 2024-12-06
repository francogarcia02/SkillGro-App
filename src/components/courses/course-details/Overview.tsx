import PaymentWindow from './PaymentWindow'
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishlistSlice";

interface OverviewProps {
   course: object;
}

const Overview: React.FC<OverviewProps> = ({course}) => {
   const dispatch = useDispatch();
   const {desc, price}:any = course
   const [open, setOpen] = useState(false)

   const handleClickButton = ()=>{
      setOpen(true)
      handleAddToCart(course)
   }

   const handleAddToCart = (item: any) => {
      dispatch(addToCart(item));
   };
   
   const handleAddToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
   };

   return (
      <div className="courses__overview-wrap">
         <h3 className="title">Descripcion</h3>
         <p>{desc}</p>
         <p className="last-info">Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.</p>
         <div className="grid justify-items-end align-center p-2">
            <button 
               className="rounded bg-blue-600 p-2 text-white text-lg"
               onClick={()=>handleClickButton()}
            >
               Comprar ${price}
            </button>
         </div>
         <PaymentWindow open={open} setOpen={setOpen}/>
      </div>
   )
}

export default Overview
