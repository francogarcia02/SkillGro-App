import { StaticImageData } from "next/image";

import wishlist_thumb1 from "@/assets/img/courses/course_thumb01.jpg"
import wishlist_thumb2 from "@/assets/img/courses/course_thumb02.jpg"
import wishlist_thumb3 from "@/assets/img/courses/course_thumb03.jpg"
import wishlist_thumb4 from "@/assets/img/courses/course_thumb04.jpg"
import wishlist_thumb5 from "@/assets/img/courses/course_thumb05.jpg"

import wishlist_avatar1 from "@/assets/img/courses/course_author001.png"
import wishlist_avatar2 from "@/assets/img/courses/course_author002.png"
import wishlist_avatar3 from "@/assets/img/courses/course_author003.png"
import wishlist_avatar4 from "@/assets/img/courses/course_author004.png"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   tag: string;
   avatar_thumb: StaticImageData;
   avatar_name: string;
   review: string;
   skill: number;
   book: string;
   time: string;
   mortarboard: string;
   old_price: number;
   price: number;
}[]

const wishlist_data: DataType[] = [
   {
      id: 1,
      thumb: wishlist_thumb1,
      title: "Financial Analyst Training & Investing Course",
      tag: "Business",
      avatar_thumb: wishlist_avatar1,
      avatar_name: "Robert Fox",
      review: "(4.5 Reviews)",
      skill: 80,
      book: "05",
      time: "11h 20m",
      mortarboard: "22",
      old_price: 20,
      price: 10,
   },
   {
      id: 2,
      thumb: wishlist_thumb2,
      title: "Learning JavaScript With Imagination",
      tag: "Mathematic",
      avatar_thumb: wishlist_avatar2,
      avatar_name: "Hawkins",
      review: "(4.5 Reviews)",
      skill: 60,
      book: "10",
      time: "13h 10m",
      mortarboard: "99",
      old_price: 29,
      price: 9,
   },
   {
      id: 3,
      thumb: wishlist_thumb3,
      title: "Learning JavaScript With Imagination",
      tag: "Development",
      avatar_thumb: wishlist_avatar3,
      avatar_name: "David Millar",
      review: "(4.5 Reviews)",
      skill: 88,
      book: "05",
      time: "11h 20m",
      mortarboard: "22",
      old_price: 29,
      price: 20,
   },
   {
      id: 4,
      thumb: wishlist_thumb4,
      title: "The Complete Graphic Design for Beginners",
      tag: "Design",
      avatar_thumb: wishlist_avatar4,
      avatar_name: "Wilson",
      review: "(4.5 Reviews)",
      skill: 70,
      book: "60",
      time: "70h 45m",
      mortarboard: "202",
      old_price: 20,
      price: 15,
   },
   {
      id: 5,
      thumb: wishlist_thumb5,
      title: "Learning JavaScript With Imagination",
      tag: "Data Science",
      avatar_thumb: wishlist_avatar4,
      avatar_name: "Warren",
      review: "(4.5 Reviews)",
      skill: 95,
      book: "08",
      time: "18h 20m",
      mortarboard: "66",
      old_price: 29,
      price: 9,
   },
   {
      id: 6,
      thumb: wishlist_thumb1,
      title: "Financial Analyst Training & Investing Course",
      tag: "Business",
      avatar_thumb: wishlist_avatar1,
      avatar_name: "Robert Fox",
      review: "(4.5 Reviews)",
      skill: 80,
      book: "05",
      time: "11h 20m",
      mortarboard: "22",
      old_price: 20,
      price: 10,
   },

];

export default wishlist_data;