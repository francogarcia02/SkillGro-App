import { StaticImageData } from "next/image";

import flag_1 from "@/assets/img/flags/flag_01.svg"
import flag_2 from "@/assets/img/flags/flag_02.svg"
import flag_3 from "@/assets/img/flags/flag_03.svg"
import flag_4 from "@/assets/img/flags/flag_04.svg"
import flag_5 from "@/assets/img/flags/flag_05.svg"
import flag_6 from "@/assets/img/flags/flag_06.svg"
import flag_7 from "@/assets/img/flags/flag_07.svg"
import flag_8 from "@/assets/img/flags/flag_08.svg"

import category_img1 from "@/assets/img/categories/cat_img01.jpg"
import category_img2 from "@/assets/img/categories/cat_img02.jpg"
import category_img3 from "@/assets/img/categories/cat_img03.jpg"
import category_img4 from "@/assets/img/categories/cat_img04.jpg"
import category_img5 from "@/assets/img/categories/cat_img05.jpg"
import category_img6 from "@/assets/img/categories/cat_img06.jpg"
import category_img7 from "@/assets/img/categories/cat_img07.jpg"
import category_img8 from "@/assets/img/categories/cat_img08.jpg"

interface DataType {
   id: number;
   page: string;
   icon: StaticImageData;
   country: string;
   course: number;
}[];

const categories_data: DataType[] = [
   {
      id: 1,
      page: "home_6",
      icon: flag_1,
      country: "German",
      course: 2,
   },
   {
      id: 2,
      page: "home_6",
      icon: flag_2,
      country: "Canada",
      course: 4,
   },
   {
      id: 3,
      page: "home_6",
      icon: flag_3,
      country: "France",
      course: 7,
   },
   {
      id: 4,
      page: "home_6",
      icon: flag_4,
      country: "Italy",
      course: 3,
   },
   {
      id: 5,
      page: "home_6",
      icon: flag_5,
      country: "Japan",
      course: 5,
   },
   {
      id: 6,
      page: "home_6",
      icon: flag_6,
      country: "Denmark",
      course: 8,
   },
   {
      id: 7,
      page: "home_6",
      icon: flag_7,
      country: "Ghana",
      course: 2,
   },
   {
      id: 8,
      page: "home_6",
      icon: flag_8,
      country: "New Zealand",
      course: 6,
   },

   // home_8

   {
      id: 1,
      page: "home_8",
      icon: category_img1,
      country: "Chinese",
      course: 22,
   },
   {
      id: 2,
      page: "home_8",
      icon: category_img2,
      country: "Dessert",
      course: 15,
   },
   {
      id: 3,
      page: "home_8",
      icon: category_img3,
      country: "Italian",
      course: 30,
   },
   {
      id: 4,
      page: "home_8",
      icon: category_img4,
      country: "Bread",
      course: 20,
   },
   {
      id: 5,
      page: "home_8",
      icon: category_img5,
      country: "Pizza",
      course: 50,
   },
   {
      id: 6,
      page: "home_8",
      icon: category_img6,
      country: "Salad",
      course: 10,
   },
   {
      id: 7,
      page: "home_8",
      icon: category_img7,
      country: "Italian",
      course: 12,
   },
   {
      id: 8,
      page: "home_8",
      icon: category_img8,
      country: "Chinese",
      course: 25,
   },
];

export default categories_data;