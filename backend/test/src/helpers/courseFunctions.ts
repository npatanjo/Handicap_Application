import ALL_COURSES from "../json/BACKING_FILE"
import { Course, ColorRating } from "../models/course";


const getCourse = (name: string) => {
    
    ALL_COURSES.forEach(( course : Course ) => {
        if (course.courseName === name) {
            return course;
        }
    });
    throw new Error("Course not found");
}


const getColorRatingsForCourse = (name:string) : ColorRating[] => {
    const course: Course = getCourse(name);
    const colorRatings: ColorRating[] = [];
    course.colorRatings.forEach((colorRating: ColorRating) => {
        colorRatings.push(colorRating);
    });
    return colorRatings;
}


const getAnyCourseWithSubstring = (substring: string) : Course[] => {
    const courses: Course[] = [];
    ALL_COURSES.forEach(( course : Course ) => {
        if (course.courseName.includes(substring)) {
            courses.push(course);
        }
    });
    return courses;
}

const getAllRatingsFieldsForCourse = (name:string, field: string) : string[] => {
    const course: Course = getCourse(name);
    const fields: string[] = [];
    course.colorRatings.forEach((colorRating: ColorRating) => {
        fields.push(colorRating[field]);
    });
    return fields;
}


export default {
    getCourse,
    getColorRatingsForCourse,
    getAnyCourseWithSubstring,
    getAllRatingsFieldsForCourse
}
