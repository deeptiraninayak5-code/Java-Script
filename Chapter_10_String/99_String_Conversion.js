// String Conversion

// to string
(200).toString() //"200"
true.toString() //"true"

Number("42") //42

parseInt("42px") //42
parseFloat("3.14rem") //3.14

let str = "hello" // String are immutable in nature in Lava
str[0] = "Hi"
console.log(str) //hello
console.log(str) //hello

let upper = str.toUpperCase()
console.log(str) //hello
console.log(upper) //HELLO