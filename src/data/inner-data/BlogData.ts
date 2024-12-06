import { StaticImageData } from "next/image";

import blog_thumb1 from "@/assets/img/blog/blog_post01.jpg"
import blog_thumb2 from "@/assets/img/blog/blog_post02.jpg"
import blog_thumb3 from "@/assets/img/blog/blog_post03.jpg"
import blog_thumb4 from "@/assets/img/blog/blog_post04.jpg"
import blog_thumb5 from "@/assets/img/blog/blog_post05.jpg"
import blog_thumb6 from "@/assets/img/blog/blog_post06.jpg"
import blog_thumb7 from "@/assets/img/blog/blog_post07.jpg"
import blog_thumb8 from "@/assets/img/blog/blog_post08.jpg"
import blog_thumb9 from "@/assets/img/blog/blog_post09.jpg"
import blog_thumb10 from "@/assets/img/blog/blog_post10.jpg"
import blog_thumb11 from "@/assets/img/blog/blog_post11.jpg"
import blog_thumb12 from "@/assets/img/blog/blog_post12.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   tag: string;
   date: string;
   title: string;
}[];

const inner_blog_data: DataType[] = [
   {
      id: 1,
      thumb: blog_thumb1,
      tag: "Marketing",
      date: "20 July, 2024",
      title: "How To Become idiculously Self-Aware In 20 Minutes"
   },
   {
      id: 2,
      thumb: blog_thumb2,
      tag: "Students",
      date: "20 July, 2024",
      title: "Get Started With UI Design With Tips To Speed"
   },
   {
      id: 3,
      thumb: blog_thumb3,
      tag: "Science",
      date: "20 July, 2024",
      title: "Make Your Own Expanding Contracting Content"
   },
   {
      id: 4,
      thumb: blog_thumb4,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 5,
      thumb: blog_thumb5,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 6,
      thumb: blog_thumb6,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 7,
      thumb: blog_thumb7,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 8,
      thumb: blog_thumb8,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 9,
      thumb: blog_thumb9,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 10,
      thumb: blog_thumb10,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 11,
      thumb: blog_thumb11,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 12,
      thumb: blog_thumb12,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 13,
      thumb: blog_thumb9,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 14,
      thumb: blog_thumb10,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 15,
      thumb: blog_thumb11,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 16,
      thumb: blog_thumb12,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 17,
      thumb: blog_thumb7,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
   {
      id: 18,
      thumb: blog_thumb8,
      tag: "Agency",
      date: "20 July, 2024",
      title: "What we are capable to usually discovered"
   },
];

export default inner_blog_data;