
export interface CourseRating {
    color: string;
    gender: "M" | "F" | string;
    par: string;
    course_rating_18: string;
    bogey_rating_18: string;
    slope_rating_18: string;
    front_9: string;
    back_9: string;
}

export interface GolfCourse {
    course_name: string;
    course_ratings: CourseRating[];
}
