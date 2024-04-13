class Department { // As per the convension, first letter of class should be in caps
    name: string; // Property/field/variable, let/var/const is not required

    constructor (n: string) { // For constructor functions, no need to use const/let or function keywords
        this.name = n;
    }

    describe (this: Department) { // For constructor functions, no need to use const/let or function keywords
        console.log("Department: " + this.name);
    }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = {name: "Dummy", describe: accounting.describe};

accountingCopy.describe();
