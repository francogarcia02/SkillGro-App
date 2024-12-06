import blog_data from "@/data/home-data/BlogData"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"

import blog_shape1 from "@/assets/img/blog/h8_blog_shape01.svg"
import blog_shape2 from "@/assets/img/blog/h8_blog_shape02.svg"

const Blog = () => {
   return (
      <section className="blog__post-area-eight section-pt-140 section-pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">News & Blogs</span>
                     <h2 className="title bold">Our Latest News Feed</h2>
                     <p>when known printer took a galley of type scrambl edmake</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {blog_data.filter((items) => items.page === "home_8").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="blog__post-item-six shine__animate-item">
                        <div className="blog__post-thumb-six">
                           <Link href="/blog-details" className="shine__animate-link"><Image src={item.thumb} alt="img" /></Link>
                           <Link href="/blog" className="post-tag-four">{item.tag}</Link>
                        </div>
                        <div className="blog__post-content-six">
                           <div className="blog__post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 <li><i className="flaticon-user-1"></i>by <Link href="/blog-details">Admin</Link></li>
                              </ul>
                           </div>
                           <h2 className="title"><Link href="/blog-details">{item.title}</Link></h2>
                           <Link href="/blog-details" className="btn arrow-btn">Read More <BtnArrow /></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="blog__shape-wrap-three">
            <Image src={blog_shape1} alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
            <Image src={blog_shape2} alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Blog
