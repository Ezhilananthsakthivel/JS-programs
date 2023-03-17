for(var i=0;i<3;i++){
    (function(i){setTimeout(function(){console.log(i)},100)})(i)
}

// (function (){
//     setTimeout(function(){
//         console.log(a)
//     },3000) 
//     let a=20
// })()


// console.log(2)
// setTimeout(function(){
//     console.log(3)
// },1000)
// setTimeout(function(){
//     console.log(4)
// },900)
// console.log(5)


// let n = 8;
// for (let i = 2; i <= n; i++) {
//     a = i
//     while (a % 2 == 0) {
//         a = a / 2
//     }
//     console.log(i,a == 1)
// }

// [3,4,5]+[4,5,6] ='3,4,54,5,6'

let arr = [-4, -2, -6, 0, 4, 3, 7, 4, 6]
// console.log(arr.sort((a, b) => a - b))
// console.log([...new Set(arr)])

// console.log(arr.reduce((acc,curr,)=>{
//     if(acc[curr]) acc[curr]++
//     else acc[curr] = 1
//     return acc
// },{}))
//---------------------------
// let a = []
//     while (arr.length > 0) {
//         a.push(arr.splice(0, 3))
//     }
//     console.log(a)

  //  ans:[[-4, -2, -6],[0, 4, 3],[7, 4, 6]]
// ---------------------------------------

var arr1 = [0, 4, 3]
var arr2 =[7, 4, 6]
arr2.length=0
console.log(arr2[0])


function abb(){
  let a=b=0
  a++
  return a
}
console.log(typeof a,typeof b)