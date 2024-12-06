import Image from "next/image";
import Link from "next/link";

export interface VideoCardProps {
    id: number;
    thumb: any;
    category?: string; 
    tag?: string;      
    rating?: number | string;   
    review?: number | string;   
    title: string;
    instructors?: string; 
    author?: string;      
    price: number;
    type: string;
}

const VideoCard = ({ item }: { item: VideoCardProps }) => {
    const {
        id,
        thumb,
        title,
        price,
        category,
        tag,
        rating,
        review,
        instructors,
        author,
        type,
    } = item;

    const displayCategory = category || tag;
    const displayRating = rating !== undefined ? rating : review;
    const displayInstructor = instructors || author;

    return (
        <div className="grid content-between auto-rows-min border border-gray-900 rounded-lg hover:shadow-2xl transition-shadow duration-200">
            <div className="w-full">
                <Link href={`/course-details/${id}`} className="rounded overflow-hidden">
                    <Image src={thumb} alt="img" className="rounded-t-lg w-full h-auto"/>
                </Link>
            </div>
            <div className="p-2">
                {displayCategory && (
                    <Link className="no-underline bg-gray-200 p-1 rounded-full text-sm hover:bg-blue-700 hover:text-white" href="/course">
                        {displayCategory}
                    </Link>
                )}
                {displayRating && (
                    <div className="flex">
                        <i className="fas fa-star"></i>
                        <p className="text-sm mb-0">{displayRating}</p>
                    </div>
                )}
                <Link href={`/course-details/${id}`} className="rounded no-underline text-black hover:underline">
                    <h5>{title}</h5>
                </Link>
                <p>By {displayInstructor}</p>
            </div>
            {type === 'edit' &&
                <Link href={`/course-details/${id}`} className="no-underline p-4">
                <div className="grid justify-items-center rounded bg-green-600 p-2">
                    <span className="text-white">Editar publicacion</span>
                </div>
            </Link>
            }
            {type === 'see' &&
                <Link href={`/see/${id}`} className="no-underline p-4">
                <div className="grid justify-items-center rounded bg-red-600 p-2">
                    <span className="text-white">Ver Video</span>
                </div>
            </Link>
            }
            {type === 'buy' &&
                <Link href={`/course-details/${id}`} className="no-underline p-4">
                <div className="grid justify-items-center rounded bg-blue-600 p-2">
                    <span className="text-white">Comprar ${price}</span>
                </div>
            </Link>
            }
            
        </div>
    );
};

export default VideoCard;
