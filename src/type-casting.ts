// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // <HTMLInputElement> is type casting

const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // as HTMLInputElement is type casting
// "!" is added a we know this statement will never return null, if we are not sure then add an if check

userInputElement.value = "Hi there!";


// // If not sure if the value is null then...

// const userInputElement1 = document.getElementById('user-input');

// if(userInputElement1) {
//     (userInputElement as HTMLInputElement).value = "Hi there!";
// }