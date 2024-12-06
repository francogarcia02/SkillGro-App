"use client"
import Image from "next/image"
import HeaderTopOne from "./menu/HeaderTopOne"
import Link from "next/link"
import NavMenuOne from "./menu/NavMenu"
import InjectableSvg from "@/hooks/InjectableSvg"
import BtnArrow from "@/svg/BtnArrow"
const TotalCart = dynamic(() => import("@/components/common/TotalCart"), { ssr: false });
const TotalWishlist = dynamic(() => import("@/components/common/TotalWishlist"), { ssr: false });

import logo from "@/assets/img/logo/logo.svg"
import { useState } from "react"
import HeaderSearch from "./menu/HeaderSearch"
import UseSticky from "@/hooks/UseSticky"
import MobileSidebar from "./menu/MobileSidebar"
import dynamic from "next/dynamic"

const HeaderThree = () => {

   const [isSearch, setIsSearch] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTopOne style={true} />
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area tg-header__style-three ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav">
                              <div className="logo">
                                 <Link href="/"><Image src={logo} alt="Logo" /></Link>
                              </div>
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <NavMenuOne />
                              </div>
                              <div className="tgmenu__action tgmenu__action-three">
                                 <ul className="list-wrap">
                                    <li className="header-search">
                                       <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-open-btn">
                                          <i className="flaticon-search"></i>
                                       </a>
                                    </li>
                                    <li className="wishlist-icon">
                                       <a href="/wishlist" className="cart-count">
                                          <InjectableSvg src="assets/img/icons/heart.svg" className="injectable" alt="img" />
                                          <TotalWishlist />
                                       </a>
                                    </li>
                                    <li className="mini-cart-icon">
                                       <Link href="/cart" className="cart-count">
                                          <InjectableSvg src="assets/img/icons/cart.svg" className="injectable" alt="img" />
                                          <TotalCart />
                                       </Link>
                                    </li>
                                    <li className="header-btn">
                                       <Link href="/login" className="btn arrow-btn">Apply Now <BtnArrow /></Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="mobile-login-btn">
                                 <Link href="/login"><InjectableSvg src="/assets/img/icons/user.svg" alt="" className="injectable" /></Link>
                              </div>
                              <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} Sidebar="slide-bar-blockchain" />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderThree
