import Image from "next/image"
import Link from "next/link"
import blog_data from "@/data/home-data/BlogData"

import blog_img1 from "@/assets/img/blog/h5_blog_shape01.svg"
import blog_img2 from "@/assets/img/blog/h5_blog_shape02.svg"

const Blog = () => {
   return (
      <section className="blog__post-area-five section-pt-140 section-pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">News & Blogs</span>
                     <h2 className="title">Our Latest News Feed</h2>
                     <p>when known printer took a galley of type scrambl edmake</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {blog_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="blog__post-item-four shine__animate-item">
                        <div className="blog__post-thumb-four">
                           <Link href="/blog-details" className="shine__animate-link"><Image src={item.thumb} alt="img" /></Link>
                        </div>
                        <div className="blog__post-content-four">
                           <Link href="blog" className="post-tag-three">{item.tag}</Link>
                           <h2 className="title"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog__post-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-user-1"></i>by <Link href="/blog-details">Admin</Link></li>
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="blog__shape-wrap-two">
            <Image src={blog_img1} alt="shape" data-aos="fade-right" data-aos-delay="400" />
            <Image src={blog_img2} alt="shape" data-aos="fade-up-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Blog
