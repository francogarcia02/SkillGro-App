"use client"
import Link from "next/link"
import HeaderTopOne from "./menu/HeaderTopOne"
import Image from "next/image"
import NavMenu from "./menu/NavMenu"
import React, { useEffect, useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import MobileSidebar from "./menu/MobileSidebar"
import InjectableSvg from "@/hooks/InjectableSvg"
import dynamic from "next/dynamic"
const TotalCart = dynamic(() => import("@/components/common/TotalCart"), { ssr: false });
const TotalWishlist = dynamic(() => import("@/components/common/TotalWishlist"), { ssr: false });
const CustomSelect = dynamic(() => import("@/ui/CustomSelect"), { ssr: false });
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UseLogin from "@/hooks/UseLogin"
import logo from "@/assets/img/logo/logo.svg"

const HeaderOne = () => {
   const {areLogued} = UseLogin()
   const [logued, setLogued] = useState<Boolean>(false)
   const [size, setSize] = useState<{ width: number; height: number }>({
      width: 1200,
      height: 1200,
   });

   useEffect(()=>{
      const log = areLogued()
      setLogued(log)
   },[])

   useEffect(() => {
      const handleResize = () => {
         setSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };
  
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const [selectedOption, setSelectedOption] = React.useState(null);

   const handleSelectChange = (option: React.SetStateAction<null>) => {
      setSelectedOption(option);
   };

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header>
            {/*<HeaderTopOne />*/}
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area ${sticky ? "sticky-menu" : ""}`}>
               <div className="ps-4 pe-4">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav flex jutstify-items">
                              <div className="logo">
                                 <Link href="/"><Image src={logo} alt="Logo" /></Link>
                              </div>
                              {size.width > 740 ?
                              <>
                                 <div className="tgmenu__navbar-wrap tgmenu__main-menu">
                                    <NavMenu />
                                 </div>
                                 <div className="tgmenu__search">
                                    <CustomSelect value={selectedOption} onChange={handleSelectChange} />
                                 </div>
                              </>
                              :
                              <></>
                              }    
                              
                              <div className="tgmenu__action">
                                 <ul className="list-wrap">
                                    <li className="wishlist-icon">
                                       <Link href="/wishlist" className="cart-count">
                                          <InjectableSvg src="/assets/img/icons/heart.svg" className="injectable" alt="img" />
                                          <TotalWishlist />
                                       </Link>
                                    </li>
                                    <li className="mini-cart-icon">
                                       <Link href="/cart" className="cart-count">
                                          <InjectableSvg src="/assets/img/icons/cart.svg" className="injectable" alt="img" />
                                          <TotalCart />
                                       </Link>
                                    </li>
                                    {logued ?
                                    <li>
                                       <Link href={`/account/${logued}`} className="no-underline">
                                          <AccountCircleIcon 
                                          sx={{ 
                                             fontSize: 45,
                                             color: '#6a6a6a',
                                             '&:hover': {
                                                color: '#2a41ff', 
                                             },
                                             transition: 'color 0.3s',
                                          }}
                                          />
                                       </Link>
                                    </li>
                                    :
                                    <li className="header-btn login-btn">
                                       <Link href="/login" className="no-underline">Log in</Link>
                                    </li>
                                    }
                                 </ul>
                              </div>
                              <div className="mobile-login-btn">
                                 <Link href="/login"><InjectableSvg src="/assets/img/icons/user.svg" alt="" className="injectable" /></Link>
                              </div>
                              {size.width < 740 ?
                              <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                              :
                              <></>
                              }
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default HeaderOne

