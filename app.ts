function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

printResult(add(5, 6));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(5, 5));