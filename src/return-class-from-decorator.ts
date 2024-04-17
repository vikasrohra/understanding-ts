function WithTemplate1(template: string, hoodId: string) {
    console.log('Template Factory');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {        
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();

                console.log('Rendering Decorator');
                const hookEle = document.getElementById(hoodId);
                if(hookEle) {
                    hookEle.innerHTML = template;
                    hookEle.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    };
}

@WithTemplate1('<h1>My Person Object</h1>', 'app')
class NewPerson1 {
    name = 'Vikas';

    constructor() {
        console.log('Creating person object...');
    }
}

const person1 = new NewPerson1();

console.log(person1);