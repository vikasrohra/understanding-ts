class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(2); // Argument of type 'number' is not assignable to parameter of type 'string'
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const mixedStorage = new DataStorage<number | string>();

// const objectStorage = new DataStorage<object>();
// const newObj = {name: 'Max'};
// objectStorage.addItem(newObj);
// objectStorage.addItem({name: 'Manu'});
// objectStorage.removeItem(newObj);
// console.log(objectStorage.getItems());
// and so on...