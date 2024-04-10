// by default enum numbering starts from 0
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person2 = {
    name: "Vikas",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

if(person2.role === Role.ADMIN) {
    console.log("is author");
}

// Array that can only have string elements
let favActivities: string[];
favActivities = ["Sports", "1"];

// Array that can have elements of any type
let activities: any[];
activities = ["Sports", 1];