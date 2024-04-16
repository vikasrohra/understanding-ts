// const names: string[] = [];
// Above statement can be written as...
const names: Array<string> = [];

// const nam: string[] | number[] = [];
// Above statement can be written as...
const nam: Array<string | number> = [];

const promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(10);
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})