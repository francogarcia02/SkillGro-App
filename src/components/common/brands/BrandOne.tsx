"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useState } from "react";

import brand_1 from "@/assets/img/brand/brand01.png";
import brand_2 from "@/assets/img/brand/brand02.png";
import brand_3 from "@/assets/img/brand/brand03.png";
import brand_4 from "@/assets/img/brand/brand04.png";
import brand_5 from "@/assets/img/brand/brand05.png";
import brand_6 from "@/assets/img/brand/brand06.png";
import brand_7 from "@/assets/img/brand/brand07.png";
import star from "@/assets/img/icons/brand_star.svg";

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_4, brand_3, brand_5];

const BrandOne = ({ style }: any) => {
   const [isPaused, setIsPaused] = useState(false);

   return (
      <div className={`brand-area ${style ? "brand-area-two" : ""}`}>
         <div className="container-fluid">
            <Marquee className="marquee_mode" pauseOnHover={false} play={!isPaused}>
               {brand_data.map((item, i) => (
                  <div
                     key={i}
                     className="brand__item"
                     onMouseEnter={() => setIsPaused(true)}
                     onMouseLeave={() => setIsPaused(false)}
                  >
                     <Link href="#"><Image src={item} alt="brand" /></Link>
                     <Image src={star} alt="star" />
                  </div>
               ))}
            </Marquee>
         </div>
      </div>
   );
}

export default BrandOne;
