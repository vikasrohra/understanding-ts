class Department { // As per the convension, first letter of class should be in caps
    // private readonly id: string;
    // name: string; // Property/field/variable, let/var/const is not required
    private employees: string[] = [];

    constructor (private readonly id: string, public name: string) { // For constructor functions, no need to use const/let or function keywords
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

class ITDepartment extends Department {
    admins: string[];
        constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("d1", ['Max']);

it.describe();

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"; // Not recommended, hence we should make class variables private so that they can be accessible only within the class

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport("Something went wrong...");
accounting.getReports();

// const itCopy = {name: "Dummy", describe: it.describe};

// itCopy.describe();
