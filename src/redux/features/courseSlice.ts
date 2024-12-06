import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import courses from '@/data/inner-data/InnerCourseData';

export interface Course {
  id: number;
  // Agrega otras propiedades de tus cursos aquí
}

interface CourseState {
  courses: Course[] | any[];
  course: Course | {};
}

const initialState: CourseState = {
  courses: courses,
  course: {},
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    single_course: (state, action: PayloadAction<number>) => {
      state.course = state.courses.find((p) => Number(p.id) === Number(action.payload)) || {};
    },
    update_courses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
  },
});

export const { single_course, update_courses } = courseSlice.actions;

// Selectores
export const selectCourses = (state: { courses: CourseState }) => state?.courses?.courses;
export const selectCourse = (state: { courses: CourseState }) => state?.courses?.course;

export default courseSlice.reducer;