// Decorator function, function name starts with capital letter, just for the convension
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class NewPerson {
    name = 'Vikas';

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new NewPerson();

console.log(person);