let userInput: unknown;
userInput = 5;
userInput = 'Max';

let userName: string;

if(typeof userInput === "string") {
    userName = userInput;
}

// function generateError(message: string, code: number) {
//     throw {message: message, errorCode: code};
// }

// const result = generateError("An error occurred!", 500);
// console.log(result);

// // Output:
// // Uncaught: {message: 'An error occurred!', errorCode: 500}
// // This method will never return, as error is thrown that crashes our script
// // If you hover over generateError, it shows void because never is newer but if we know it can never return then we can explicitly assign it to never

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while(true) {}
}

const result = generateError("An error occurred!", 500);
console.log(result);