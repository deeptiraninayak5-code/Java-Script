class Car {
    #engine;

    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName;
    }

    getEngine(){
        return this.#engine;
    }
    setEngin(nameEngine){
        this.#engine = nameEngine;
    }

}

let tesla = new Car("Tsla", "V8");
console.log(tesla.getEngine());
tesla.setEngine(V9);
console.log(tesla.getEngine());