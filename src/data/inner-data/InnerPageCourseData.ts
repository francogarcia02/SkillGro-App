import { StaticImageData } from "next/image";

import course_thumb1 from "@/assets/img/courses/course_thumb01.jpg"
import course_thumb2 from "@/assets/img/courses/course_thumb02.jpg"
import course_thumb3 from "@/assets/img/courses/course_thumb03.jpg"
import course_thumb4 from "@/assets/img/courses/course_thumb04.jpg"
import course_thumb5 from "@/assets/img/courses/course_thumb05.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   review: string;
   title: string;
   author: string;
   price: number;
}[];

const inner_page_course_data: DataType[] = [
   {
      id: 1,
      page: "inner_1",
      thumb: course_thumb1,
      tag: "Development",
      review: "(4.8 Reviews)",
      title: "Learning JavaScript With Imagination",
      author: "David Millar",
      price: 15,
   },
   {
      id: 2,
      page: "inner_1",
      thumb: course_thumb2,
      tag: "Design",
      review: "(4.5 Reviews)",
      title: "The Complete Graphic Design for Beginners",
      author: "David Millar",
      price: 19,
   },
   {
      id: 3,
      page: "inner_1",
      thumb: course_thumb3,
      tag: "Marketing",
      review: "(4.3 Reviews)",
      title: "Learning Digital Marketing on Facebook",
      author: "David Millar",
      price: 24,
   },
   {
      id: 4,
      page: "inner_1",
      thumb: course_thumb4,
      tag: "Business",
      review: "(4.8 Reviews)",
      title: "Financial Analyst Training & Investing Course",
      author: "David Millar",
      price: 12,
   },
   {
      id: 5,
      page: "inner_1",
      thumb: course_thumb5,
      tag: "Data Science",
      review: "(4.5 Reviews)",
      title: "Data Analysis & Visualization Masterclass",
      author: "David Millar",
      price: 27,
   },
];

export default inner_page_course_data