
export interface CourseRating {
    color: string;
    gender: "M" | "F" | string;
    par: string;
    courseRating18: string;
    bogeyRating18: string;
    slopeRating18: string;
    front9: string;
    back9: string;
}

export interface GolfCourse {
    courseName: string;
    courseRatings: CourseRating[];
}
