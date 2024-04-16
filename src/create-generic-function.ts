// Scenario 1
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Vikas'}, {age: 30})
// console.log(mergedObj.name); // Property 'name' does not exist on type 'object', because TS doesn't know this, it knows to return as object but doesn't carry all the information

// Scenario 2
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// // We can type cast the result but what if we have a lot of properties/ or we don't the properties
// const mergedObj = merge({name: 'Vikas'}, {age: 30}) as {name: string, age: number};
// console.log(mergedObj.name);

// Function Generic
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Vikas'}, {age: 30});
console.log(mergedObj.name);
console.log(mergedObj.age);

// on hover over mergedObj we'll get more generic intersected object, now we can access the properties
// const mergedObj: {
//     name: string;
// } & {
//     age: number;
// }


interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if(element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else {
        descriptionText = "Got " + element.length + " elements.";
    }

    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!")); // (2) ['Hi there!', 'Got 9 elements.']
console.log(countAndDescribe([1, 2, 3])); // (2) [Array(3), 'Got 3 elements.']
console.log(countAndDescribe([])); // (2) [Array(3), 'Got no value.']
// console.log(countAndDescribe(2)); // Compile time error, Argument of type 'number' is not assignable to parameter of type 'Lengthy'

// Conslusion: It is a common method for strings, arrays and other types that has length property, not percific to type but a generic method for all the types that have length property

