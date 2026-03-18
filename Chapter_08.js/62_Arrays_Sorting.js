//Sorting

let fruits = ["banana", "apple", "cherry"]
fruits.sort()
console.log(fruits) // [ 'apple', 'banana', 'cherry' ]
// alphabetical by default

let nums = [10, 1, 21,2]
nums.sort() // [1, 10, 2, 21] <- WRONG (compares as strings!)
console.log(nums)
nums.sort((a,b) => a-b) // [ 1, 2, 10, 21] <- Ascending
console.log(nums)
nums.sort((a,b) => b-a)
console.log(nums) //[21, 10, 2, 1] <-desending