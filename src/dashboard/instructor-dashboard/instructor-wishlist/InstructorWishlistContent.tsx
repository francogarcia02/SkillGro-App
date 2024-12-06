import wishlist_data from "@/data/dashboard-data/InstructorWishlistData"
import Image from "next/image"
import Link from "next/link"

const InstructorWishlistContent = () => {
   return (
      <div className="col-lg-9">
         <div className="dashboard__content-wrap dashboard__content-wrap-two">
            <div className="dashboard__content-title">
               <h4 className="title">Wishlist</h4>
            </div>
            <div className="row">
               {wishlist_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className="courses__item courses__item-two shine__animate-item">
                        <div className="courses__item-thumb courses__item-thumb-two">
                           <Link href="/course-details" className="shine__animate-link">
                              <Image src={item.thumb} alt="img" />
                           </Link>
                        </div>
                        <div className="courses__item-content courses__item-content-two">
                           <ul className="courses__item-meta list-wrap">
                              <li className="courses__item-tag">
                                 <Link href="/course">{item.tag}</Link>
                              </li>
                              <li className="price"><del>${item.old_price}.00</del>${item.price}.00</li>
                           </ul>
                           <h5 className="title"><Link href="/course-details">{item.title}</Link></h5>
                           <div className="courses__item-content-bottom">
                              <div className="author-two">
                                 <Link href="/instructor-details"><Image src={item.avatar_thumb} alt="img" />{item.avatar_name}</Link>
                              </div>
                              <div className="avg-rating">
                                 <i className="fas fa-star"></i> {item.review}
                              </div>
                           </div>
                        </div>
                        <div className="courses__item-bottom-two">
                           <ul className="list-wrap">
                              <li><i className="flaticon-book"></i>{item.book}</li>
                              <li><i className="flaticon-clock"></i>{item.time}</li>
                              <li><i className="flaticon-mortarboard"></i>{item.mortarboard}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default InstructorWishlistContent
