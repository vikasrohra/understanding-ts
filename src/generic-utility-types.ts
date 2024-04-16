interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// This will works fine
// function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
//     return {title: title, description: description, completeUntil: completeUntil};
// }

// But what if we want to assign the properties individually, then it fails because we have first created empty object that doesn't have properties
// function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
//     let courseGoal = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = completeUntil;

//     return courseGoal as CourseGoal;
// }


// Now we can make the create the type of courseGoal as CourseGoal, but then too it will not work, because initially it is {} and hence Partial Types comes into picture 
// Type '{}' is missing the following properties from type 'CourseGoal': title, description, completeUntilts
// function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
//     let courseGoal: CourseGoal = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = completeUntil;

//     return courseGoal as CourseGoal;
// }


// Partial Types
// It makes all the properties optional only temporarily
function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;

    return courseGoal as CourseGoal;
}


// Readonly Generic
const names1: Readonly<string[]> = ['Max', 'Anna'];
// names1.push('Manu'); // Property 'push' does not exist on type 'readonly string[]'
// names1.pop(); // Property 'pop' does not exist on type 'readonly string[]'