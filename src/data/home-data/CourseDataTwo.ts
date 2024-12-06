import { StaticImageData } from "next/image";

import course_thumb1 from "@/assets/img/courses/h3_course_thumb01.jpg"
import course_thumb2 from "@/assets/img/courses/h3_course_thumb02.jpg"
import course_thumb3 from "@/assets/img/courses/h3_course_thumb03.jpg"
import course_thumb4 from "@/assets/img/courses/h3_course_thumb04.jpg"
import course_thumb5 from "@/assets/img/courses/h4_course_thumb01.jpg"
import course_thumb6 from "@/assets/img/courses/h4_course_thumb02.jpg"
import course_thumb7 from "@/assets/img/courses/h4_course_thumb03.jpg"
import course_thumb8 from "@/assets/img/courses/h4_course_thumb04.jpg"
import course_thumb9 from "@/assets/img/courses/h5_course_thumb01.jpg"
import course_thumb10 from "@/assets/img/courses/h5_course_thumb02.jpg"
import course_thumb11 from "@/assets/img/courses/h5_course_thumb03.jpg"
import course_thumb12 from "@/assets/img/courses/h5_course_thumb04.jpg"
import course_thumb13 from "@/assets/img/courses/h6_course_thumb01.jpg"
import course_thumb14 from "@/assets/img/courses/h6_course_thumb02.jpg"
import course_thumb15 from "@/assets/img/courses/h6_course_thumb03.jpg"
import course_thumb16 from "@/assets/img/courses/h6_course_thumb04.jpg"
import course_thumb17 from "@/assets/img/courses/h7_course_thumb01.jpg"
import course_thumb18 from "@/assets/img/courses/h7_course_thumb02.jpg"
import course_thumb19 from "@/assets/img/courses/h7_course_thumb03.jpg"
import course_thumb20 from "@/assets/img/courses/h7_course_thumb04.jpg"
import course_thumb21 from "@/assets/img/courses/h7_course_thumb05.jpg"
import course_thumb22 from "@/assets/img/courses/h7_course_thumb06.jpg"
import course_thumb23 from "@/assets/img/courses/h7_course_thumb07.jpg"
import course_thumb24 from "@/assets/img/courses/h7_course_thumb08.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag?: string;
   review: string;
   title: string;
   desc?: string;
   price: number;
   lesson: string;
   student: number;
   language?: string;
   country?: string;
}[];

const course_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      thumb: course_thumb1,
      tag: "Finance",
      review: "(4.8 Reviews)",
      title: "Web Development Master class & Certifications",
      price: 25,
      lesson: "Lessons 05",
      student: 22
   },
   {
      id: 2,
      page: "home_3",
      thumb: course_thumb2,
      tag: "Marketing",
      review: "(4.8 Reviews)",
      title: "Learning Digital Marketing on Facebook",
      price: 44,
      lesson: "Lessons 05",
      student: 22
   },
   {
      id: 3,
      page: "home_3",
      thumb: course_thumb3,
      tag: "Business",
      review: "(4.8 Reviews)",
      title: "Financial Analyst Training & Investing Course",
      price: 20,
      lesson: "Lessons 05",
      student: 22
   },
   {
      id: 4,
      page: "home_3",
      thumb: course_thumb4,
      tag: "Economics",
      review: "(4.8 Reviews)",
      title: "Master The Fundamentals Of Math",
      price: 32,
      lesson: "Lessons 05",
      student: 22
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      thumb: course_thumb5,
      tag: "Advanced Yoga",
      review: "(4.8 Reviews)",
      title: "Yoga For Beginners",
      price: 25,
      lesson: "Lessons 0",
      student: 22
   },
   {
      id: 2,
      page: "home_4",
      thumb: course_thumb6,
      tag: "Vinyasa",
      review: "(4.8 Reviews)",
      title: "Increased Flexibility",
      price: 20,
      lesson: "Lessons 09",
      student: 22
   },
   {
      id: 3,
      page: "home_4",
      thumb: course_thumb7,
      tag: "Ashtanga",
      review: "(4.8 Reviews)",
      title: "Balance Body & Mind",
      price: 35,
      lesson: "Lessons 5",
      student: 22
   },
   {
      id: 4,
      page: "home_4",
      thumb: course_thumb8,
      tag: "Kundalini",
      review: "(4.8 Reviews)",
      title: "Hatha Yoga Class",
      price: 22,
      lesson: "Lessons 08",
      student: 22
   },

   // home_5
   {
      id: 1,
      page: "home_5",
      thumb: course_thumb9,
      review: "(4.8 Reviews)",
      title: "Mathematics Class",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 75,
      lesson: "08 - 10am",
      student: 1 - 5,
   },
   {
      id: 2,
      page: "home_5",
      thumb: course_thumb10,
      review: "(4.8 Reviews)",
      title: "Pre-Nursery Class",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 62,
      lesson: "08 - 10am",
      student: 1 - 5,
   },
   {
      id: 3,
      page: "home_5",
      thumb: course_thumb11,
      review: "(4.8 Reviews)",
      title: "Art & Creativity Class",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 84,
      lesson: "08 - 10am",
      student: 1 - 5,
   },
   {
      id: 4,
      page: "home_5",
      thumb: course_thumb12,
      review: "(4.8 Reviews)",
      title: "Drawing Class",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 32,
      lesson: "08 - 10am",
      student: 1 - 5,
   },

   // home_six

   {
      id: 1,
      page: "home_6",
      thumb: course_thumb13,
      review: "(4.8)",
      title: "Professional Tutor",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 75,
      lesson: "05",
      student: 22,
      language: "Russian",
      country: "English",
      tag: "Martiniza",
   },
   {
      id: 2,
      page: "home_6",
      thumb: course_thumb14,
      review: "(4.8)",
      title: "Professional Tutor",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 99,
      lesson: "08",
      student: 15,
      language: "English",
      country: "German",
      tag: "Martiniza",
   },
   {
      id: 3,
      page: "home_6",
      thumb: course_thumb15,
      review: "(4.8)",
      title: "Professional Tutor",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 80,
      lesson: "08",
      student: 29,
      language: "English",
      country: "Japan",
      tag: "Martiniza",
   },
   {
      id: 4,
      page: "home_6",
      thumb: course_thumb16,
      review: "(4.8)",
      title: "Professional Tutor",
      desc: "The foundation of the Monte areay ssori philosophy",
      price: 65,
      lesson: "07",
      student: 30,
      language: "Russian",
      country: "Italy",
      tag: "Martiniza",
   },

   // home_7

   {
      id: 1,
      page: "home_7",
      thumb: course_thumb17,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 55,
      lesson: "05",
      student: 22,
      tag: "Finance",
   },
   {
      id: 2,
      page: "home_7",
      thumb: course_thumb18,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 70,
      lesson: "12",
      student: 200,
      tag: "Law",
   },
   {
      id: 3,
      page: "home_7",
      thumb: course_thumb19,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 50,
      lesson: "05",
      student: 102,
      tag: "Tax",
   },
   {
      id: 4,
      page: "home_7",
      thumb: course_thumb20,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 62,
      lesson: "05",
      student: 22,
      tag: "Investment",
   },
   {
      id: 5,
      page: "home_7",
      thumb: course_thumb21,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 15,
      lesson: "05",
      student: 22,
      tag: "HR Professional",
   },
   {
      id: 6,
      page: "home_7",
      thumb: course_thumb22,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 29,
      lesson: "05",
      student: 22,
      tag: "Tax",
   },
   {
      id: 7,
      page: "home_7",
      thumb: course_thumb23,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 40,
      lesson: "11",
      student: 500,
      tag: "Environment",
   },
   {
      id: 8,
      page: "home_7",
      thumb: course_thumb24,
      review: "(4.8 Reviews)",
      title: "It Statistics Data Science And Business Analysis",
      price: 20,
      lesson: "60",
      student: 600,
      tag: "Business",
   },
];

export default course_data;
