import { StaticImageData } from "next/image";

import testi_avatar1 from "@/assets/img/instructor/h2_instructor01.png"
import testi_avatar2 from "@/assets/img/instructor/h2_instructor02.png"
import testi_avatar3 from "@/assets/img/instructor/h2_instructor03.png"
import testi_avatar4 from "@/assets/img/instructor/h2_instructor04.png"
import testi_avatar5 from "@/assets/img/instructor/h2_instructor05.png"
import testi_avatar6 from "@/assets/img/others/testi_author01.png"
import testi_avatar7 from "@/assets/img/others/testi_author02.png"
import testi_avatar8 from "@/assets/img/others/testi_author03.png"

interface DataType {
   id: number;
   page: string;
   avatar: StaticImageData;
   rating?: string;
   title: string;
   designation: string;
   desc: string;
}[];

const testimonial_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      avatar: testi_avatar1,
      rating: "(4.8 Ratings)",
      title: "Olivia Mia",
      designation: "Web Design",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 2,
      page: "home_2",
      avatar: testi_avatar2,
      rating: "(4.8 Ratings)",
      title: "William Hope",
      designation: "Digital Marketing",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 3,
      page: "home_2",
      avatar: testi_avatar3,
      rating: "(4.8 Ratings)",
      title: "Olivia Mia",
      designation: "Web Design",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 4,
      page: "home_2",
      avatar: testi_avatar4,
      rating: "(4.8 Ratings)",
      title: "Mark Jukarberg",
      designation: "UX Design Lead",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 5,
      page: "home_2",
      avatar: testi_avatar5,
      rating: "(4.8 Ratings)",
      title: "David Millar",
      designation: "UX/UI Design",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 6,
      page: "home_2",
      avatar: testi_avatar3,
      rating: "(4.8 Ratings)",
      title: "Olivia Mia",
      designation: "Web Design",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 7,
      page: "home_2",
      avatar: testi_avatar4,
      rating: "(4.8 Ratings)",
      title: "Mark Jukarberg",
      designation: "UX Design Lead",
      desc: "SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
   },
   {
      id: 1,
      page: "home_3",
      avatar: testi_avatar6,
      rating: "(4.8 Ratings)",
      title: "Wade Warren",
      designation: "Designer",
      desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   },
   {
      id: 2,
      page: "home_3",
      avatar: testi_avatar7,
      title: "Jenny Wilson",
      designation: "Designer",
      desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   },
   {
      id: 3,
      page: "home_3",
      avatar: testi_avatar8,
      title: "Kristin Watson",
      designation: "Designer",
      desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   },
   {
      id: 4,
      page: "home_3",
      avatar: testi_avatar7,
      title: "Jenny Wilson",
      designation: "Designer",
      desc: "“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”",
   },
];

export default testimonial_data;