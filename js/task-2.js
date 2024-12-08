class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    getItems() { return this.#items}
    addItem(item) {
        if (!this.#items.includes(item)) { return this.#items.push(item) }
        else {return this.#items}
        
    }
    removeItem(item) {
        if (this.#items.includes(item)) { return this.#items.splice(this.#items.indexOf(item), 1) }
        else {return this.#items}
        
    }
    
} 
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

