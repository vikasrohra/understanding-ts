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
