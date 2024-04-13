class Department { // As per the convension, first letter of class should be in caps
    // private id: string;
    // name: string; // Property/field/variable, let/var/const is not required
    private employees: string[] = [];

    constructor (private id: string, public name: string) { // For constructor functions, no need to use const/let or function keywords
        // this.id = id;
        // this.name = name;
    }

    describe (this: Department) { // For constructor functions, no need to use const/let or function keywords
        console.log(`Department ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("D1", "Accounting");

accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // Not recommended, hence we should make class variables private so that they can be accessible only within the class

accounting.printEmployeeInformation();

// const accountingCopy = {name: "Dummy", describe: accounting.describe};

// accountingCopy.describe();
