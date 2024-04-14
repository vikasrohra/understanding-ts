// type AddFn = (a: number, b: number) => number;

// Interface as a function type
interface AddFn {
    (a: number, b: number) : number;
}

let addNumbers: AddFn;

addNumbers = (n1: number, n2: number) => {
    return n1 + n2;
};