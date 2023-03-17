//1. js currying
/* console.log(sum(1)(2)(3)(4)())

function sum(a) {
    return function (b) {
        if (b !== undefined)
        return sum(a+b)
        else
        return a
    }
} */
//-------------------------------------------------------------------------------------------->

//2.
let fun = name => location => name + " sakthi, " + location + ", ariyalur"
console.log(fun("ananth")("thelur")) 

// function fun(name){
//     return function(location){
//         return name+location
//     }
// } 
// console.log(fun("ananth")("thelur")) 

//closure:
/*let fun = name => location =>
    name + " sakthi, " + location + ", ariyalur"
let f = fun("ananth")
console.log(f("thelur"))
*/
//-------------------------------------------------------------------------------------->

//3
//normal function working
// function hi() {
//     return arguments
// }
// console.log(hi("hi"))
//arrow function not working
// let hi = () => arguments
// console.log(hi("hi"))
//now it is working
// let hi = (...h) => h
// console.log(hi("hi"))
//------------------------------------------------------------------------------------->

//4
//ans:-Infinity
//console.log(Math.max())

//--------------------------------------------------------------------------------------->

//5. Move zeros to the end 
//  without using extra variable-->
//  let arr = [1, 0, 0, 3, 2, 0, 4]

// function moveToZero(arr) {
//     let slow = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[slow] = arr[i];
//             slow++
//         }
//     }
//     while (slow < arr.length) {
//         arr[slow] = 0;
//         slow++;
//     }
//     return (arr)
// }
// console.log(moveToZero(arr))

//using extra variable-->
// let arr = [1, 0, 0, 3, 2, 0, 4]

// function moveToZero(arr) {
//     result = []
//     zeros = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0)                    //if(arr[i]==0){zeros.push(0)}
//             result.push(arr[i])
//         else                                 //else{result.push(arr[i])}
//             zeros.push(arr[i])
//     }
//     return [...result, ...zeros]
// }
// console.log(moveToZero(arr))
//-------------------------------------------------------------------------------------->


//6.Flat Array
//first method
// let arr1 = [1, 2, [3, 4, [7, 8], 6], 9]
// let arr2 = []
// function flat(arr) {
//     arr.forEach(e => {
//         if (Array.isArray(e))
//             flat(e)
//         else
//             arr2.push(e)
//     });
// }
// flat(arr1)
// console.log(arr2)

//second method
// let arr = [[1, 2], [3, 4], [5, [6, 7, 8], 9], [10, [11, 12], 13]];

// let flattened = arr.flat(Infinity);
// console.log(flattened);

//------------------------------------------------------------------------------------->


//7.First unique value
// let str = "asgusttgghjsgtfasgg"
// let hashTable = {}

// for (i = 0; i < str.length; i++) {
//     if (hashTable[str[i]])
//         hashTable[str[i]] = 2
//     else
//         hashTable[str[i]] = 1
// }
// for (i in hashTable) {
//     if (hashTable[i] == 1) {
//         console.log(i)
//         break
//     }
// }
//-------------------------------------------------------------------------------------->


//9.Flatten JavaScript objects into a single-depth Object
const obj = {
    name: "ananth",
    degree: "BE",
    poy: 2021,
    address: {
        street: "west street",
        village: "thelur",
        city: "ariyalur",
        pincode: 621704,
        phone_no: {
            phone1: 9876543210,
            phone2: 9123456780
        }
    }
}

const flattenObj = (obj) => {
    let result = {};
    for (const i in obj) {
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j];
            }
        }
        else {
            result[i] = obj[i];
        }
    }
    return result;
};

console.log(flattenObj(obj));

//-------------------------------------------------------------------------------------->


//10. Object Deep copy and shallow copy
// const obj = {
//     name: "ananth",
//     degree: "BE",
//     poy: 2021,
//     address: {
//         street: "west street",
//         village: "thelur",
//         city: "ariyalur",
//         pincode: 621704,
//         phone_no: {
//             phone1: 9876543210,
//             phone2: 9123456780
//         }
//     }
// }

// const obj1 = JSON.parse(JSON.stringify(obj))
// obj.address.phone_no.phone1 = 43
// console.log(obj)
// console.log(obj1)

//------------------------------------------------------------------------------------->


//11. Array Deep copy and shallow copy

// const arr1 = [1, 3, [5, 6], 9]
// const arr2 = JSON.parse(JSON.stringify(arr1))
// arr1[2][1]++
// console.log(arr1)
// console.log(arr2)

//--------------------------------------------------------------------------------------->


//12.Factorial using recursion 

// function Factorial(n) {
//     //method-1---->
//     if (n == 1) return n                        //if (n <= 1) return 1
//     if (n >= 2) return n * Factorial(n - 1)     //return n * Factorial(n - 1)
//     //meth0d-2---->
//     // if (n == 1) return 1
//     // for (i = n - 1; i > 1; i--)
//     //     n *= i
//     // return n
// }
// console.log(Factorial(5))

//------------------------------------------------------------------------------------------>


//13.Titlecase
//method-1---->
// function Titlecase(str) {
//     var word = str.toLowerCase().split(" ")
//     for (let i = 0; i < word.length; i++) {
//         word[i] = word[i][0].toUpperCase() + word[i].slice(1)
//     }
//     return word.join(" ")
// }
//method-2---->
// function Titlecase(str) {
//     let string = str.toLowerCase().split(" ").map((s) => s[0].toUpperCase() + s.slice(1))
//     return string.join(" ")
// }

// console.log(Titlecase("i am on the way"))

//--------------------------------------------------------------------------------------------->


//14. Confirm the Ending
//function ConfirmEnding(str, target) {
//method-1---->
// if (str.substr(-target.length) === target) return true
// return false
//method-2---->
//return str.slice(-target.length) === target
//method-3---->
//return str.substr(-target.length) === target
//}

//console.log(ConfirmEnding('ananth', 'h'))
//-------------------------------------------------------------------------------------------->


//15. Repeat String Num Times
//function RepeatString(str, n) {
//method-1---->
//return str.repeat(n)
//method-2---->
// let s = ''
// if(n<1) return str
// for(let i=1; i<=n; i++){
//     s+=str
// }
// return s
//method-3---->
// if (n <= 0) return str
// if (n === 1) return str
// return str + RepeatString(str, n - 1)
//}

//console.log(RepeatString('ananth', 3))
//------------------------------------------------------------------------------------->

//16. Chunky Monkey
//function Chunky(arr, n) {
//method-1---->
// let a = []
// while (arr.length > 0) {
//     a.push(arr.slice(0, n))
//     arr = arr.slice(n)
// }
// return a
//method-2---->
//     let a = []
//     while (arr.length > 0) {
//         a.push(arr.splice(0, n))
//     }
//     return a

// }

// console.log(Chunky([2, 4, 6, 5, 3, 5, 7], 3))
//--------------------------------------------------------------------------------------->

//17. Mutations
// function Mutations(str1, str2) {
//method-1---->
// for (let i = 0; i < str2.length; i++) {
//     if (str1.indexOf(str2[i]) === -1) return false
// }
// return true
// //method-2---->
//     for (let i = 0; i < str2.length; i++) {
//         if (!str1.includes(str2[i])) return false  //match() can also use
//     }
//     return true
// }
// console.log(Mutations('ananth', 'ttto'))
// ----------------------------------------------------------------------------------------->

//18. Seek and Destroy
// function destroyer(...arr) {
//     let b = []
//     let a = arr[0]
//     arr.splice(0, 1)
//     for (let i of a)
//         if (!arr.includes(i))
//             b.push(i)
//     return b
// }
// console.log(destroyer([1, 2, 3, 4, 5], 2, 3))
//------------------------------------------------------------------------------------->

//19. Where do I belong
// function equalOrBigger(arr, n) {
//     arr.sort((a, b) => a - b)
//     for (let i in arr)
//         if (arr[i] >= n)
//             return i
// }
// console.log(equalOrBigger([2, 5, 3, 8, 9], 6))

//--------------------------------------------------------------------------------------->

// 20.DiffArray
// function DiffArray(arr1, arr2) {
//method-1---->
// let a = []
// let arr = arr1.concat(arr2)
// for (i of arr)
//     if (!arr1.includes(i) || !arr2.includes(i))
//         a.push(i)
// return a
//method-2---->
// let arr = arr1.concat(arr2)
//return arr.filter((i) => !arr1.includes(i) || !arr2.includes(i))
//}

//console.log(DiffArray([1, 3, 5, 7], [1, 2, 3, 4, 5, 6]))
//whats dev----------------------------------------------------------------------------->

//21.Find thired uniqe value or nth unique
//function thiredUniqe(str, nth) {
    //method-1---->
    // let hashTable = {}
    // let a = 0
    // for (i = 0; i < str.length; i++) {
    //     if (hashTable[str[i]])
    //         hashTable[str[i]] = 2
    //     else
    //         hashTable[str[i]] = 1
    // }
    // for (i in hashTable) {
    //     if (hashTable[i] == 1) {
    //         a++
    //         if (a === nth)
    //             return i
    //     }
    // }
    // return "none"
    //method-2---->
    // let hashTable = {}
    // let a = 0
    // for (i = 0; i < str.length; i++) {
    //     hashTable[str[i]] = (hashTable[str[i]] || 0) + 1
    // }
    // for (i = 0; i < str.length; i++) {
    //     if (hashTable[str[i]] == 1) {
    //         a++
    //         if (a === nth) return str[i]
    //     }
    // }
    // return "none"
//}
// let str = "asgusttgghjsgtfasggzx"
// let nth = 3
// console.log(thiredUniqe(str, nth))




//console.log("ananth")
