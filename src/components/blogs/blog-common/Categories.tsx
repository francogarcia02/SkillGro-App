import Link from "next/link";

const categories_data: string[] = ["Art & Design", "Business", "Data Science", "Development", "Finance", "Health & Fitness", "Lifestyle"];

const Categories = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Categories</h4>
         <div className="shop-cat-list">
            <ul className="list-wrap">
               {categories_data.map((cat, i) => (
                  <li key={i}>
                     <Link href="#"><i className="flaticon-angle-right"></i>{cat}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Categories
