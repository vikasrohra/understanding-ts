class Department { // As per the convension, first letter of class should be in caps
    name: string; // Property/field/variable, let/var/const is not required
    constructor (n: string) { // For functions, no need to use const/let or function keywords
        this.name = n;
    }
}

const accounting = new Department("Accounting");

console.log(accounting);
