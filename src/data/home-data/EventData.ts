import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/h3_event_thumb01.jpg"
import eventThumb_2 from "@/assets/img/events/h3_event_thumb02.jpg"
import eventThumb_3 from "@/assets/img/events/h3_event_thumb03.jpg"
import eventThumb_4 from "@/assets/img/events/h4_event_thumb01.jpg"
import eventThumb_5 from "@/assets/img/events/h4_event_thumb02.jpg"
import eventThumb_6 from "@/assets/img/events/h4_event_thumb03.jpg"

interface DataType {
   id: number,
   page: string;
   thumb: StaticImageData;
   title: string;
   date: string;
   desc?: string;
   location: string;
   time: string;
}[];

const event_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      thumb: eventThumb_1,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      desc: "Dorem ipsum dolor sitt amet consectur piscingelit tempor incididunt ut lasum dolor sit amet",
      location: "United States",
      date: "25 June, 2024",
   },
   {
      id: 2,
      page: "home_3",
      thumb: eventThumb_2,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      desc: "Dorem ipsum dolor sitt amet consectur piscingelit tempor incididunt ut lasum dolor sit amet",
      location: "United States",
      date: "28 June, 2024",
   },
   {
      id: 3,
      page: "home_3",
      thumb: eventThumb_3,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      desc: "Dorem ipsum dolor sitt amet consectur piscingelit tempor incididunt ut lasum dolor sit amet",
      location: "United States",
      date: "30 June, 2024",
   },

   // home_4
   {
      id: 1,
      page: "home_4",
      thumb: eventThumb_4,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      location: "United States",
      date: "28 June, 2024",
   },
   {
      id: 2,
      page: "home_4",
      thumb: eventThumb_5,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      location: "United States",
      date: "28 June, 2024",
   },
   {
      id: 3,
      page: "home_4",
      thumb: eventThumb_6,
      title: "Student Global Education Fall Meeting for Everyone",
      time: "9:30 am - 11:30 am",
      location: "United States",
      date: "28 June, 2024",
   },
];

export default event_data;