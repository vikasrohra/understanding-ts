type combined = string | number;

function addTwoNums(a: combined, b: combined) {
    if(typeof a === "string" || typeof b === "string") { // Here typeof is one kind of Guard here
        return a.toString() + b.toString();
    }
    return a + b;
}

type Admin1 = {
    name: string;
    privileges: string[];
}

type Employee1 = {
    name: string;
    startDate: Date;
}

type UnknownEmployee = Admin1 | Employee1;

const e2: UnknownEmployee = {
    name: 'Vikas',
    privileges: ['create-server'],
    startDate: new Date()
}

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);

    // if(emp.privileges) { // TS will not compile
    if('privileges' in emp) { // Different syntax in JS is property exists in object 
        // type guard
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp) { // Different syntax in JS is property exists in object
         // type guard
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo(e2);
printEmployeeInfo({name: "Max", startDate: new Date()});



// Classes 

class Car {
    drive() {
        console.log('Driving a car...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle (vehicle: Vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) { // Not recommended as we can mistype here
    if(vehicle instanceof Truck) { // Available in vanila JS 
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1); 
//Driving a car...

useVehicle(v2); 
// Driving a truck...
// type-guards.ts:62 Loading cargo... 1000