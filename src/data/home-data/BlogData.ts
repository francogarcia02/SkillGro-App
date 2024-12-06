import { StaticImageData } from "next/image";

import blog_1 from "@/assets/img/blog/blog_post01.jpg"
import blog_2 from "@/assets/img/blog/blog_post02.jpg"
import blog_3 from "@/assets/img/blog/blog_post03.jpg"
import blog_4 from "@/assets/img/blog/blog_post04.jpg"
import blog_5 from "@/assets/img/blog/h4_blog_post01.jpg"
import blog_6 from "@/assets/img/blog/h4_blog_post02.jpg"
import blog_7 from "@/assets/img/blog/h4_blog_post03.jpg"
import blog_8 from "@/assets/img/blog/h5_blog_post01.jpg"
import blog_9 from "@/assets/img/blog/h5_blog_post02.jpg"
import blog_10 from "@/assets/img/blog/h5_blog_post03.jpg"
import blog_11 from "@/assets/img/blog/h6_blog_post01.jpg"
import blog_12 from "@/assets/img/blog/h6_blog_post02.jpg"
import blog_13 from "@/assets/img/blog/h6_blog_post03.jpg"
import blog_14 from "@/assets/img/blog/h8_blog_post01.jpg"
import blog_15 from "@/assets/img/blog/h8_blog_post02.jpg"
import blog_16 from "@/assets/img/blog/h8_blog_post03.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   date: string;
   title: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blog_1,
      tag: "Marketing",
      date: "20 July, 2024",
      title: "How To Become idiculously Self-Aware In 20 Minutes",
   },
   {
      id: 2,
      page: "home_1",
      thumb: blog_2,
      tag: "Students",
      date: "20 July, 2024",
      title: "Get Started With UI Design With Tips To Speed",
   },
   {
      id: 3,
      page: "home_1",
      thumb: blog_3,
      tag: "Science",
      date: "20 July, 2024",
      title: "Make Your Own Expanding Contracting Content",
   },
   {
      id: 4,
      page: "home_1",
      thumb: blog_4,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      thumb: blog_5,
      tag: "Practice",
      date: "20 July, 2024",
      title: "Finding Zen: The Benefits of Yoga And Meditation For Mental Health",
   },
   {
      id: 2,
      page: "home_4",
      thumb: blog_6,
      tag: "Yoga",
      date: "20 July, 2024",
      title: "The Benefits of Yoga And Meditation For Mental Health",
   },
   {
      id: 3,
      page: "home_4",
      thumb: blog_7,
      tag: "Modern Instruments",
      date: "20 July, 2024",
      title: "The Benefits of Yoga And Meditation For Mental Health",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      thumb: blog_8,
      tag: "Marketing",
      date: "20 July, 2024",
      title: "Learn from Anywhere with Our eLearning Platform",
   },
   {
      id: 2,
      page: "home_5",
      thumb: blog_9,
      tag: "Agency",
      date: "20 July, 2024",
      title: "platform has given me the bility to learn on my own schedule",
   },
   {
      id: 3,
      page: "home_5",
      thumb: blog_10,
      tag: "Play Ground",
      date: "20 July, 2024",
      title: "learning platform where you can easily access course content",
   },

   // home_6

   {
      id: 1,
      page: "home_6",
      thumb: blog_11,
      tag: "Marketing",
      date: "20 July, 2024",
      title: "Learn from Anywhere with Our eLearning Platform",
   },
   {
      id: 2,
      page: "home_6",
      thumb: blog_12,
      tag: "Agency",
      date: "20 July, 2024",
      title: "platform has given me the bility to learn on my own schedule",
   },
   {
      id: 3,
      page: "home_6",
      thumb: blog_13,
      tag: "Play Ground",
      date: "20 July, 2024",
      title: "learning platform where you can easily access course content",
   },

   // home_8

   {
      id: 1,
      page: "home_8",
      thumb: blog_14,
      tag: "Cooking",
      date: "20 July, 2024",
      title: "Learn From Anywhere With Our ELearning Platform",
   },
   {
      id: 2,
      page: "home_8",
      thumb: blog_15,
      tag: "Food",
      date: "20 July, 2024",
      title: "Learn From Anywhere With Our ELearning Platform",
   },
   {
      id: 3,
      page: "home_8",
      thumb: blog_16,
      tag: "Recipes",
      date: "20 July, 2024",
      title: "Learn From Anywhere With Our ELearning Platform",
   },
];

export default blog_data;