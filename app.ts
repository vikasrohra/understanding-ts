
// Not recommended
const person : {
    name: string,
    age: number
} = {
    name: "Vikas",
    age: 30
}

console.log(person.name);


// Recommended
const person2 = {
    name: "Vikas",
    age: 30
}

console.log(person2.name);


// Array that can only have string elements
let favActivities: string[];
favActivities = ["Sports", "1"];

// Array that can have elements of any type
let activities: any[];
activities = ["Sports", 1];