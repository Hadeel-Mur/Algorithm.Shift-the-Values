// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

let x = [2,1,6,4,-7];
let result = []
for (let i  = x.length -1 ; i > 0  ; i--){
   result.push(x[i])
   
}console.log(result)



// Pseudocode
// 1- declare the array at the first place
// 2- loop through the array in reverse order starting from the last elemnt to the first one
//  and use a method which is push() to push the backward elemnt to the start and store the result in a new array

// coding


// let x = [2,1,6,4,-7];
// let result = [];
// for (let i = x.length - 1; i >=0; i--){
//    result.push(x[i])
// }
// console.log(result)

// Diagram
// 1- since i = x.length -1 so we started iterating from the last element as long as i >= 0 to get
// to the first element and then push every back element from the x array to the beginning of the result arra