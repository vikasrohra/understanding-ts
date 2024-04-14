interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

user1.greet("Hi there - I'm");


type Person1 = {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user2: Person1;

user2 = {
    name: 'Manu',
    age: 29,
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

user2.greet("Hi there - I'm");