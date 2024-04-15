interface Bird {
    type: 'bird'; // discriminator name can be anything, we have give type here
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    // If we do like below and if we have many animal then we've do for all the types
    // if('flyingSpeed' in animal) {
    //     console.log("Moving with speed: " + animal.runningSpeed);
    // }

    // Cannot use instanceof as Interfaces cannot be instantaited

    // So here comes the discriminated unions, we can add discriminator on each interface

    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log("Moving with speed: " + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});