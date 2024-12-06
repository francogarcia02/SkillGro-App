import Link from "next/link";

const tags: string[] = ["Education", "Training", "Online", "Learn", "Course", "LMS"];

const Tags = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Tags</h4>
         <div className="tagcloud">
            {tags.map((tag, i) => (
               <Link key={i} href="#">{tag}</Link>
            ))}
         </div>
      </div>
   )
}

export default Tags
