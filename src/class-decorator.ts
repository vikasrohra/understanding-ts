// // Decorator function, function name starts with capital letter, just for the convension
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// @Logger
// class NewPerson {
//     name = 'Vikas';

//     constructor() {
//         console.log('Creating person object...');
//     }
// }

// const person = new NewPerson();

// console.log(person);

// Factory function that returns decorator function
function Logger(logString: string) {    
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('Logging - Person') // Here now we have to call the factory function
class NewPerson {
    name = 'Vikas';

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new NewPerson();

console.log(person);