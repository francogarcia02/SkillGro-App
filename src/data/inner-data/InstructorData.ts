import { StaticImageData } from "next/image";

import instructor_img1 from "@/assets/img/instructor/instructor01.png";
import instructor_img2 from "@/assets/img/instructor/instructor02.png";
import instructor_img3 from "@/assets/img/instructor/instructor03.png";
import instructor_img4 from "@/assets/img/instructor/instructor04.png";
import instructor_img5 from "@/assets/img/instructor/instructor05.png";
import instructor_img6 from "@/assets/img/instructor/instructor06.png";
import instructor_img7 from "@/assets/img/instructor/instructor07.png";
import instructor_img8 from "@/assets/img/instructor/instructor08.png";
import instructor_img9 from "@/assets/img/instructor/instructor09.png";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   name: string;
   degisnation: string;
}[];

const inner_instructor_data: DataType[] = [
   {
      id: 1,
      page: "inner_1",
      thumb: instructor_img1,
      name: "Sophia Ava",
      degisnation: "Digital Marketing",
   },
   {
      id: 2,
      page: "inner_1",
      thumb: instructor_img2,
      name: "William Hope",
      degisnation: "Web Development",
   },
   {
      id: 3,
      page: "inner_1",
      thumb: instructor_img3,
      name: "Ronald S. Staton",
      degisnation: "Ronald S. Staton",
   },
   {
      id: 4,
      page: "inner_1",
      thumb: instructor_img4,
      name: "Dennis L. Turner",
      degisnation: "UX Design Lead",
   },
   {
      id: 5,
      page: "inner_1",
      thumb: instructor_img5,
      name: "Timothy S. Reed",
      degisnation: "Digital Marketing",
   },
   {
      id: 6,
      page: "inner_1",
      thumb: instructor_img6,
      name: "Barbara D. Rice",
      degisnation: "Barbara D. Rice",
   },
   {
      id: 7,
      page: "inner_1",
      thumb: instructor_img7,
      name: "Olivia Mia",
      degisnation: "Web Design",
   },
   {
      id: 8,
      page: "inner_1",
      thumb: instructor_img8,
      name: "Mark Jukarberg",
      degisnation: "UX Design Lead",
   },
   {
      id: 9,
      page: "inner_1",
      thumb: instructor_img9,
      name: "Sandy J. Rankin",
      degisnation: "Web Development",
   },
];

export default inner_instructor_data;