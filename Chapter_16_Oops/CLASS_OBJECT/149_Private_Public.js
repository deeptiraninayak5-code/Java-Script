// Private Field (#) - Hidden Data
// PUBLIC Fields
class Credentials {
    #apiKey;
    user;

    constructor(user, key){
        this.user = user;
        this.#apiKey = key;
    }
    // Custom made function by us
    promodegetAuthHeader(){
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

console.log(cred.pramodgetAuthHeader());

// cred. apiKey is undefined
// (it doesn't exist).
// cred.#apiKey would throw a syntaxError.
// this ONLY way to access it is through the public method get AuthHeader()