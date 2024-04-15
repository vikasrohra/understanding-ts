type Merged = number | string;

// Below are function overloads
function addition1(a: number, b: number): number;
function addition1(a: string, b: string): string;
function addition1(a: string, b: number): string;
function addition1(a: number, b: string): string;
function addition1(a: Merged, b: Merged) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result1 = addition1('Vikas', 'Rohra');
result1.split(' '); // Will work

// const result2 = addition1(1, 2);
// result2.split(' '); // Gives error - Property 'split' does not exist on type 'number'
