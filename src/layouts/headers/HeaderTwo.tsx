"use client"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import NavMenu from "./menu/NavMenu"
import InjectableSvg from "@/hooks/InjectableSvg"
const TotalCart = dynamic(() => import("@/components/common/TotalCart"), { ssr: false });
const CustomSelect = dynamic(() => import("@/ui/CustomSelect"), { ssr: false });

import logo from "@/assets/img/logo/logo.svg"
import React, { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import UseCartInfo from "@/hooks/UseCartInfo"
import MobileSidebar from "./menu/MobileSidebar"

const HeaderTwo = () => {

   const [selectedOption, setSelectedOption] = React.useState(null);

   const handleSelectChange = (option: React.SetStateAction<null>) => {
      setSelectedOption(option);
   };

   const { total } = UseCartInfo();
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header>
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area tg-header__style-two ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav">
                              <div className="logo">
                                 <Link href="/"><Image src={logo} alt="Logo" /></Link>
                              </div>
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <NavMenu />
                              </div>
                              <div className="tgmenu__search d-none d-md-block">
                                 <CustomSelect value={selectedOption} onChange={handleSelectChange} />
                              </div>
                              <div className="tgmenu__action tgmenu__action-two">
                                 <ul className="list-wrap">
                                    <li className="mini-cart-icon">
                                       <Link href="/cart" className="cart-count-two">
                                          <i className="flaticon-shopping-cart"></i>
                                          <TotalCart />
                                       </Link>
                                       <strong className="price">${total.toFixed(2)}</strong>
                                    </li>
                                    <li className="header-btn login-btn">
                                       <Link href="/contact" className="btn">Get Started</Link>
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
      </>
   )
}

export default HeaderTwo
