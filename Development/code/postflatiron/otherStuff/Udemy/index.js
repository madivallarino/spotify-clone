// function sort(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; i++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
                
//             }
//         }
//     }
// return arr

// }

// function selectionSort(arr){

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+ 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// return arr

// }



// console.log(selectionSort([8, 6, 4, 1, 2, 5]))

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
           
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     return undefined 
// }





// let test1 = [-3, -2, -1, 0, 1, 2, 3]
// let test2 = [-2, 0, 1, 3]
// let test3 = [1, 2, 3]

// console.log(sumZero(test3))


// function countUniqueValues(arr){
//     let counter = 0;
//     let firstpointer = 0;
//     let secondpointer = firstpointer + 1;

//     while(firstpointer < arr.length ){
//         if(arr[firstpointer] === arr[secondpointer]){
//             secondpointer++
//             firstpointer++
//         } else if (arr[firstpointer] != arr[secondpointer]){
//             counter++
//             firstpointer++ 
//             secondpointer = firstpointer + 1
//         }
    
        
//     }
//     return counter
// }



// function countUniqueValues(arr){
//     let i = 0;
//     let j = 1;
//     while(j < arr.length  ){
//         if(arr[i] === arr[j]){
//             j++
//         }else {
//             i++
//            arr[i] = arr[j]
           
//            j++
//         }
    
//     }
//     return i +1 
// }

// let test1 = [1, 1, 1, 1, 1, 2]
// let test2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
// let test3 = []
// let test4 = [-2, -1, -1, 0, 1]
// let test5 = [1, 2, 3, 4, 4, 4]



// console.log(countUniqueValues(test2))

// function maxSubarraySum(arr, num){
//     let total = 0;
//     let highest = 0;
//     let counter = num;
//     let i = 0;
//     let j = 1;
//     while(j < arr.length){
//         let total = 0;
//         let temp = 0;
//         if(counter === 0 ){
//             counter = num;
//             temp = total;
//         }
//         if(counter > 0){
//             total += arr[j]
//             total += arr[i]
//             j += 2;
//             i += 2;
//             counter--
//             counter--
//         }
//         if(counter === 0 && j === arr.length){

//         }
//     }
// }

// function maxSubarraySum(arr, num){

//     for(let i = 0; i < arr.length; i++){
//        console.log(arr.slice(i, i+num).reduce((a, b )=> a + b, 0))
//     }
// }

// function grabHighestNumber(arr, num){
//     let highestNumber = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         let bigNum = maxSubarraySum(arr[i], num)
//         if(bigNum > highestNumber){
//             highestNumber = bigNum
//         }
//     }
//     return highestNumber
// }



// let test1 = [1, 2, 5, 2, 8,1, 5]
// let num1 = 2;
// let test2 = [1, 2, 5, 2, 8, 1, 5]
// let num2 = 4;
// let test3 = [4, 2, 1, 6]
// let num3 = 1;
// let test4 = []
// let num4 = 4;


// console.log(maxSubarraySum(test1, num1))

// function sameFrequency(num1, num2){
//     let obj = {};
//     let i = 0;
//     let j = 0;
//     let firstNum = num1.toString().split('')
//     let secondNum = num2.toString().split('')
//     while(i < firstNum.length){
//         if(!(obj[firstNum[i]])){
//             obj[firstNum[i]] = 1;
//         } else {
//             obj[firstNum[i]] += 1
//          }
//          i++
//     }

//    for(let j = 0; j < secondNum.length; j++){
//        let number = secondNum[j];

//        if(!(obj[number])){
//            return false
//        }else {
//            obj[number] -= 1
//        }
//    }
 
//     return true 


// }

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))


// function areThereDuplicates(arr){
//     let i = 0;
//     let j = 1;
//     while(j < arr.length){
//         if(arr[i] === arr[j]){
//             return true
//         } else {
//             j++
//             i++
//         }
//     }
//     return false;
// }

// function areThereDuplicates(arr){
//     let obj = {};
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//         if(!(obj[arr[i]])){
//             obj[arr[i]] = 1;
//         } else {
//             return true
//         }
//     }
//     return false
// }


function areThereDuplicates(){
    let args = arguments;
    let obj = [];
    for (var i = 0; i < args.length; i++) {
        obj.push(args[i])
      }
      return makeFrequencyCounter(obj)
}


// function makeFrequencyCounter(obj){
   
//     let hash = {}
//     let i = 0;
//     while(i < obj.length){
//         if(!(hash[obj[i]])){
//             hash[obj[i]] = 1

//         } else {
//             return true
//         }
//         i++
//     }
//     return false
// }
// // console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))


// function averagePair(arr, num){
//     let i = 0;
//     let j = 1;
  
//     if(arr === []){
//         return false 
//     }

//     while(i < arr.length - 1){
//        console.log(i)
//        console.log('-----')
//        console.log(arr.length)
//         if(j === arr.length){
//             console.log('hello butthole')
//             i++
//             j = i + 1
           
//     }
//         if((((arr[i] + arr[j]) / 2) === num)){
//             console.log('hello')
//             return true;

//         }  else {
//             console.log('hello james')
//             j++ 
           
//         }
         
//         } 
//         return false
     
// }

// console.log(averagePair([1, 2, 3], 2.5)) //true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12 , 19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) //false
// console.log(averagePair([], 4)) //false


// function isSubsequence(str1, str2){
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')
//     console.log(arr1)
//     console.log(arr2)
//     let i = 0;
//     let j = 0;
//     while(j <= arr2.length){
//         if(i === arr1.length){
//             return true
//         }
//         if(arr1[i] === arr2[j]){
//             j++
//             i++
//         } else {
//             j++
//         }
        
//     }
//     return false
// }

// console.log(isSubsequence('hello', 'hello world')) // true 
// console.log(isSubsequence('sing', 'sting')) // true
// console.log(isSubsequence('abc', 'abracadabra')) //true
// console.log(isSubsequence('abc', 'acb')) // false (order mattters) 


// function maxSubarraySum(arr, num){
//     let i = 0;
//     let j = num - 1;
    
//     if(num > arr.length){
//         return null;
//     }
//     let totalSum = 0;

//     for(let i = 0; i < num; i++){
//         totalSum += arr[i]
//     }
    // while(j < arr.length){
    //     let temp = 0;
    //     let total = 0;
    //     let temparr = arr.slice(i, num).reduce((a, b) => a + b, 0)
    //     let othertemp = arr.slice(i + 1, num + 1).reduce((a, b) => a + b, 0)
    //     let answer = Math.max(temparr, othertemp)
    //     console.log(answer)
    //     j++
        
    // }
    // arr[i + j] - i 
    
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
// console.log(maxSubarraySum([1, 4, 3, 10, 23, 3, 1, 0, 20], 4)) // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6 , -1], 2)) // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
// console.log(maxSubarraySum([2, 3], 3)) // null




// function matrixSwitch(arr){
//     let first = 0;
//     let n = arr[0].length
//     for(let layer = 0; layer < n / 2; layer ++){

//     }
// }

// let temp = top;
// right = top[i][last]


// let matrix = [
//     [1, 5, 9, 13], 
//     [2, 6, 10, 14], 
//     [3, 7, 11, 15],
//     [4, 8, 12, 16],
// ]

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9 ]
// ]

// console.log(matrixSwitch(matrix))
// console.log(matrixSwitch(matrix2))

function subStringRotation(str1, str2){
   let index =  str1.indexOf(str2[0])
//    console.log(str1.slice(index))
//    console.log(str1.slice(0, index))
   let word = str1.slice(index) + str1.slice(0, index)
   
   
   if(word === str2){
       return true
   } else {
       return false 
   }
    

}

let word = 'waterbottle'
let testcase = 'erbottlewat'
// console.log(subStringRotation())
console.log(subStringRotation(testcase, word))

