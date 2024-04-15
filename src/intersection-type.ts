type Admin = {
    name: string;
    privileges: string[];
}

// interface Admin {
//     name: string;
//     privileges: string[];
// }

type Employee = {
    name: string;
    startDate: Date;
}

// interface Employee {
//     name: string;
//     startDate: Date;
// }

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee extends Admin, Employee {};

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

console.log(e1);


type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;