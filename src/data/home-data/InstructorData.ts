import { StaticImageData } from "next/image";

import instructor_img1 from "@/assets/img/instructor/h4_instructor01.jpg"
import instructor_img2 from "@/assets/img/instructor/h4_instructor02.jpg"
import instructor_img3 from "@/assets/img/instructor/h4_instructor03.jpg"
import instructor_img4 from "@/assets/img/instructor/h4_instructor04.jpg"
import instructor_img5 from "@/assets/img/instructor/h5_instructor01.jpg"
import instructor_img6 from "@/assets/img/instructor/h5_instructor02.jpg"
import instructor_img7 from "@/assets/img/instructor/h5_instructor03.jpg"
import instructor_img8 from "@/assets/img/instructor/h5_instructor04.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   tag: string;
}[];

const instructor_data: DataType[] = [
   {
      id: 1,
      page: "home_4",
      thumb: instructor_img1,
      name: "Layla Santiago",
      tag: "Pilates Instructor",
   },
   {
      id: 2,
      page: "home_4",
      thumb: instructor_img2,
      name: "ZenVib Yoga",
      tag: "Pilates Instructor",
   },
   {
      id: 3,
      page: "home_4",
      thumb: instructor_img3,
      name: "Zenni Motion",
      tag: "Pilates Instructor",
   },
   {
      id: 4,
      page: "home_4",
      thumb: instructor_img4,
      name: "Joyful Zen",
      tag: "Pilates Instructor",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      thumb: instructor_img5,
      name: "Wade Warren",
      tag: "Sports Teacher",
   },
   {
      id: 2,
      page: "home_5",
      thumb: instructor_img6,
      name: "Cody Fisher",
      tag: "Sports Teacher",
   },
   {
      id: 3,
      page: "home_5",
      thumb: instructor_img7,
      name: "Dianne Russell",
      tag: "Sports Teacher",
   },
   {
      id: 4,
      page: "home_5",
      thumb: instructor_img8,
      name: "Jerome Bell",
      tag: "Sports Teacher",
   },
];

export default instructor_data;