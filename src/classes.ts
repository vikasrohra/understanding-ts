abstract class Department { // As per the convension, first letter of class should be in caps
    // private readonly id: string;
    // name: string; // Property/field/variable, let/var/const is not required
    protected employees: string[] = [];
    static fiscalYear = 2020;

    constructor (protected readonly id: string, public name: string) { // For constructor functions, no need to use const/let or function keywords
        // this.id = id;
        // this.name = name;
        console.log(Department.fiscalYear); // cannot be accessed like this.fiscalYear
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe (this: Department): void;

    addEmployee(employee: string) { // For constructor functions, no need to use const/let or function keywords
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

    describe() {
        console.log("Department with ID: " + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // get propery, acts as an encapsulation 
    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("Please in a valid value!");
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    // Function name can be anything
    // This function will check if we already have an instance of the class and if it has then return that instance, if not, return a new one.
    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log("Department with ID: " + this.id);
    }

    addEmployee(employee: string) {
        if(employee == "Max") {
            return;
        }

        this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Test Employee");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ['Max']);

it.describe();

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna"; // Not recommended, hence we should make class variables private so that they can be accessible only within the class

it.printEmployeeInformation();

console.log(it);


// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.getReports();

// const itCopy = {name: "Dummy", describe: it.describe};

// itCopy.describe();
