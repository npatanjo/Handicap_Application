export interface User {
    username: string;
    password: string;
    gender: string,
    token: string;
}

export interface colorRating {
    color: string,
    gender: "male" | "female" | "",
    par: string,
    courseRating18: string,
    bogeyRating18: string,
    slopeRating18: string,
    front9: string,
    back9: string
  }


export interface Course {
    courseName: string;
    courseRatings: colorRating[];
}

