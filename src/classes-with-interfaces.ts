interface Greetable {
    name: string;

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

const user = new Person("Max");

user.greet("Hi there - I'm");