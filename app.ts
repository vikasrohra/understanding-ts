const person2 : {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Vikas",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'auther'] // Tuple with number and string
}

console.log(person2.name);

// Array that can only have string elements
let favActivities: string[];
favActivities = ["Sports", "1"];

// Array that can have elements of any type
let activities: any[];
activities = ["Sports", 1];