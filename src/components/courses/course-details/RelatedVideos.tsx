import UseCourses from "@/hooks/UseCourses";
import VideoCard from "../course/VideoCard";
import { useMemo } from "react";

interface RelatedVideosProps {
    category: string;
    id: BigInteger;
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ category, id }) => {
    const { courses } = UseCourses();


    const coursesFiltered = useMemo(() => {
        return courses.filter(course => course.category === category && course.id !== id);
    }, [courses, category, id]);

    return (
        <section>
            <div className="grid justify-items-center align-center gap-4 m-4">
                <div>
                    <h1 className="bg-gray-200 text-purple-500 p-3 rounded-full">Videos Relacionados</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center align-center">
                    {courses && courses.length > 0 ? (
                        coursesFiltered.map(item => (
                            <VideoCard key={item.id} item={{...item, type:'buy'}} />
                        ))
                    ) : (
                        <p>No hay videos relacionados.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default RelatedVideos;
