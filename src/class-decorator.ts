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
    console.log('Logger Factory');    
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hoodId: string) {
    // return function(_: Function) { // Not interested in the constructor and to tell TypeScript that I'm not interested here, I can add an underscore as a name, which basically signals the TS, "Yeah I know I get this argument, but I don't need it"
    console.log('Template Factory');
    return function(constructor: any) {
        console.log('Template Decorator');
        const hookEle = document.getElementById(hoodId);
        const p = new constructor();
        if(hookEle) {
            hookEle.innerHTML = template;
            hookEle.querySelector('h1')!.textContent = p.name;
        }

    }
}

@Logger('Logging - Person') // Here now we have to call the factory function
@WithTemplate('<h1>My Person Object</h1>', 'app')
class NewPerson {
    name = 'Vikas';

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new NewPerson();

console.log(person);