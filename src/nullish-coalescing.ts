const userInput1 = undefined;

// const storedData = userInput || 'Default'; // This will be false for undefined, null, '' and 0 
const storedData = userInput ?? 'Default'; // This will be false for undefined and null

console.log(storedData);