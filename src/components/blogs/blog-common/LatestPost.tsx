import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import blog_img1 from "@/assets/img/blog/latest_post04.jpg"
import blog_img2 from "@/assets/img/blog/latest_post02.jpg"
import blog_img3 from "@/assets/img/blog/latest_post03.jpg"
import blog_img4 from "@/assets/img/blog/latest_post04.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   date: string;
   title: string;
}[];

const latest_podt_data: DataType[] = [
   {
      id: 1,
      thumb: blog_img1,
      date: "April 13, 2024",
      title: "the Right Learning Path for your",
   },
   {
      id: 2,
      thumb: blog_img2,
      date: "April 13, 2024",
      title: "The Growing Need Management",
   },
   {
      id: 3,
      thumb: blog_img3,
      date: "April 13, 2024",
      title: "the Right Learning Path for your",
   },
   {
      id: 4,
      thumb: blog_img4,
      date: "April 13, 2024",
      title: "The Growing Need Management",
   },
];

const LatestPost = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Latest Post</h4>
         {latest_podt_data.map((item) => (
            <div key={item.id} className="rc-post-item">
               <div className="rc-post-thumb">
                  <Link href="/blog-details">
                     <Image src={item.thumb} alt="img" />
                  </Link>
               </div>
               <div className="rc-post-content">
                  <span className="date"><i className="flaticon-calendar"></i> {item.date}</span>
                  <h4 className="title"><Link href="/blog-details">{item.title}</Link></h4>
               </div>
            </div>
         ))}
      </div>
   )
}

export default LatestPost
