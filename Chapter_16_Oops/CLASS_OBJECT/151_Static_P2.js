class Student {
    static collegeName = "PW AT Batch";

    constructor(name){
        this.name = name;
    }
    static display(){
        console.log(this.name+ "are part of the", Student.collegeName)
    }
}

let deepti = new Student("deepti");
let rani = new Student("rani");
let nayak = new Student("nayak");

console.log(Student.collegeName);
console.log(deepti.name);
console.log(rani.name);
