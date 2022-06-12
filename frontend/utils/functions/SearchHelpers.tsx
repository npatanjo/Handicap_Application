
import COURSES from '../../BACKING_FILE.json';
import { GolfCourse } from 'utils/GolfCourse';

export async function fetchFilter(search: string) : Promise<string[]> {
    let filteredCourses: string[] = [];
    const allCourses: GolfCourse[] = COURSES;
    allCourses.forEach( course  => {
        if (course.courseName.toLowerCase().includes(search.toLowerCase())) {
            const str : string = course.courseName;
            filteredCourses.push(str);
        }
    });
    return filteredCourses;
}

export async function fetchResults(search: string) : Promise<GolfCourse[]> {
    let resultingCourses: GolfCourse[] = [];
    const allCourses: GolfCourse[] = COURSES;
    allCourses.forEach( ( course : GolfCourse )  => {
        if (course.courseName.toLowerCase().includes(search.toLowerCase())) {
            resultingCourses.push(course);
        }
    });
    return resultingCourses;
}                                  

