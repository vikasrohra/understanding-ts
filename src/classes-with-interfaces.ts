interface Named {
    readonly name: string;
}

interface Greetable extends Named {
   greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user: Greetable;

user = new Person("Max");
// user.name = "Manu";

user.greet("Hi there - I'm");