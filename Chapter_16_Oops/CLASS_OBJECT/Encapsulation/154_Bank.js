class ICICI {
    #balance;

    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(balance, isCashier){
        if(isCashier){
            this.#balance = balance;
        }else{
            console.log("Not allowed")
        }
    }
}

let promod = new ICICI("Pramod", 1000);
console.log(pramod.getBalance());
pramod.setBalance(10000000, false);
console.log(pramod.getBalance());

let promad_father = new ICICI("Pramod", 2000);
console.log(pramod_father.getBalance());
pramod_father.setBalance(300000, true);
console.log(promod_father.getBalance());
