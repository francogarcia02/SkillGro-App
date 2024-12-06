import { useSelector, useDispatch } from "react-redux";
import { selectCourses, update_courses, Course } from "@/redux/features/courseSlice";
import { useEffect } from "react";

const UseCourses = () => {
   const dispatch = useDispatch();
   const courses = useSelector(selectCourses);

   const setCourses = (newCourses: Course[]) => {
      dispatch(update_courses(newCourses));
   };

   return {
      courses,
      setCourses
   };
};

export default UseCourses;
