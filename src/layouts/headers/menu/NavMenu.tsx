"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "@/data/home-data/MenuData";
import Image from "next/image";

import icon_1 from "@/assets/img/others/mega_menu_img.jpg";

const NavMenu = () => {
   const pathname = usePathname();

   const isActive = (href: string) => pathname === href;


   const isAnyChildActive = (hrefs: string[] = []) => hrefs.some((href) => pathname === href);
   return (
      <ul className="m-0 ps-4 navigation">
         {menu_data.map((menu) => {
            const subMenuLinks = menu.sub_menus?.map((sub_m) => sub_m.link).filter(Boolean) || [];
            const megaMenuLinks = menu.sub_menus
               ?.flatMap((sub_m) => sub_m.mega_menus?.map((mega_m) => mega_m.link))
               .filter(Boolean) || [];
            const homeSubMenuLinks = menu.home_sub_menu
               ?.flatMap((h_menu) => h_menu.menu_details.map((h_menu) => h_menu.link))
               .filter(Boolean) || [];

            const allLinks = [...subMenuLinks, ...megaMenuLinks, ...homeSubMenuLinks].filter(Boolean) as string[];

            return (
               <li key={menu.id} className={`border-none menu-item-has-children ${isAnyChildActive(allLinks) ? "active" : ""}`}>
                  <Link href={menu.link} className="no-underline">{menu.title}</Link>
                  <ul className={`sub-menu ${menu.menu_class}`}>
                     {menu.home_sub_menu ? (
                        <>
                           {menu.home_sub_menu.map((h_menu_details, i) => (
                              <li key={i}>
                                 <ul className="list-wrap mega-sub-menu">
                                    {h_menu_details.menu_details.map((h_menu: any, index: any) => {
                                       const isHomeSubMenuActive = isActive(h_menu.link);
                                       return (
                                          <li key={index} className={isHomeSubMenuActive ? "active" : ""}>
                                             <Link href={h_menu.link} className='no-underline'>
                                                {h_menu.title} <span className={h_menu.badge_class}>{h_menu.badge}</span>
                                             </Link>
                                          </li>
                                       );
                                    })}
                                 </ul>
                              </li>
                           ))}

                           <li>
                              <div className="mega-menu-img">
                                 <Link href="/courses" className="no-underline"><Image src={icon_1} alt="img" /></Link>
                              </div>
                           </li>
                        </>
                     ) : (

                        menu.sub_menus?.map((sub_m: any, index: any) => {
                           const isSubMenuActive = isActive(sub_m.link);
                           const isAnyMegaChildActive = isAnyChildActive(
                              sub_m.mega_menus?.map((mega_m: any) => mega_m.link).filter(Boolean) as string[]
                           );

                           return (
                              <li key={index} className={`${sub_m.dropdown ? "menu-item-has-children" : ""} ${isSubMenuActive || isAnyMegaChildActive ? "active" : ""}`}>
                                 <Link href={sub_m.link} className="no-underline">{sub_m.title}</Link>
                                 {sub_m.mega_menus && (
                                    <ul className="sub-menu">
                                       {sub_m.mega_menus?.map((mega_m: any, i: any) => (
                                          <li key={i} className={isActive(mega_m.link) ? "active" : ""}>
                                             <Link href={mega_m.link} className="no-underline">{mega_m.title}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 )}
                              </li>
                           );
                        })
                     )}
                  </ul>
               </li>
            );
         })}
      </ul>
   );
};

export default NavMenu;
