// 1.Math Sequences
// function math(arr) {
// method-1---->
// add = []
// multi = []
// for (let i = 1; i < arr.length; i++) {
//     let n1 = arr[i] - arr[i - 1]
//     add.push(n1)
//     let n2 = arr[i] / arr[i - 1]
//     multi.push(n2)
// }
// let a = [...new Set(add)]
// let m = [...new Set(multi)]
// if (a.length == 1) return `add by ${a[0]}`
// if (m.length == 1) return `multi by ${m[0]}`
// return -1

// method-2---->
//     add = new Set()
//     multi = new Set()
//     for (let i = 1; i < arr.length; i++) {
//         let n1 = arr[i] - arr[i - 1]
//         add.add(n1)
//         let n2 = arr[i] / arr[i - 1]
//         multi.add(n2)
//     }
//     let [a] = add
//     let [m] = multi
//     if (add.size == 1) return `add by ${a}`
//     if (multi.size == 1) return `multi by ${m}`
//     return -1
// }
// console.log(math([2, 4, 6, 8]))
// console.log(math([3, 9, 27]))
// ------------------------------------------------------------------------------------------->

// 2.Longest Words
// function LongestWords(str) {
//     method-1----> this method have some error 
//     let word = str.split(' ');
//     let size = 0;
//     let max = [''];
//     for (i = 0; i < word.length; i++) {
//         if (word[i].length >= size) {
//             size = word[i].length
//             if (max[max.length - 1].length < word[i].lenght) {
//                 max = []
//                 max.push(word[i]);
//             }
//             else {
//                 max = [...max, word[i]];
//             }
//         }
//     }
//     return max
//     method-2---->
//     let word = str.split(' ')
//     let size = 0
//     let max = []
//     for (i = 0; i < word.length; i++)
//         if (word[i].length >= size)
//             size = word[i].length
//     for (i = 0; i < word.length; i++)
//         if (word[i].length == size)
//             max.push(word[i])
//     return max
//  }
//  console.log(LongestWords("i woke up early today"))
// --------------------------------------------------------------------------------------->
// 3. find the string characters are unique or not
// function uniqueCharacters(str) {
// method-1---->
// let arr = []
// for (i of str) {
//     if (arr.indexOf(i) !== -1)
//         return false
//     arr.push(i)
// }
// return true
// method-2---->
// let obj = {}
// for (i of str) {
//     if (obj[i])
//         return false
//     obj[i] = 'hi'
// }
// return true
// method-3---->
// for (i = 0; i < str.length; i++) {
//     if (str.lastIndexOf(str[i]) !== i) {
//         return false
//     }
// }
// return true
// }
// console.log(uniqueCharacters("ananth"))
// console.log(uniqueCharacters("abcde"))
// ------------------------------------------------------------------------------------>

// 4.letter counting in the string
// function LetterCounting(str) {
//     //method-1---->
//     let temparr = str.toLowerCase().split(" ")
//     temparr = temparr.map((s) => {
//         let tempc = s.toLowerCase().split("")
//         return tempc.reduce((acc, cur) => {
//             acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
//             if (acc[cur] > acc.max)
//                 acc.max = acc[cur]
//             return acc
//         }, { max: 1, word: s })
//     })
//     return temparr
//     //method-2---->
// }
// console.log(LetterCounting("ananth sakthi kishore jaga"))
// ----------------------------------------------------------------------------------------->

// 5.Capitalize First Letter
// function CapitalizeFirst(str) {
//     let word = str.split(' ').map((s) => {
//         //     let first = s.slice(0,1).toUpperCase()
//         //     let rest = s.slice(1)
//         //     return(`${first}${rest}`)
//         return s.charAt(0).toUpperCase() + s.slice(1)
//     })
//     return word.join(" ")
// }
// console.log(CapitalizeFirst("i am ananth sakthi"))

// console.log("ananth")