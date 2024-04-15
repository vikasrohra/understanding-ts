interface ErrorContainer {
    // For the example purpose, we are validating fields present in the form, but we don't the fields and how many fields are present, like prop: value can be email: 'Not a valid email', username: 'Must start with a capital character and so on...'
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a capital character"
}

// Index Properties are used...
// Can be used when which property names we want to use and how many properties we need