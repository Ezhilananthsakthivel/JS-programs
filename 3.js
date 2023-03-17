// function animal(name) {
//     this.name = name;          //own property
//     this.n = function () {
//         console.log(this.name, this.numsoflegs + "legs")
//     }
// }
// animal.prototype.numsoflegs = 4         //prototype property
// animal.prototype.ani = { eat: 3, legs: function () { return console.log(this.eat) } }

// function bird() {
//     this.name = "dog";
//     this.n = function () {
//         console.log(this.name)
//     }
// }


// const a = new animal("dog")
// const b = Object.create(animal.prototype)
// a.n()
// a.ani.legs()
// console.log('1', a.constructor == animal)
// console.log('2', a.constructor == bird)
// console.log('3', a.hasOwnProperty("name"))
// console.log('4', a.hasOwnProperty("numsoflegs"))
// console.log('5', animal.prototype.isPrototypeOf(a))
// console.log('6', bird.prototype.isPrototypeOf(a))
// console.log('7', a instanceof animal)
// console.log('8', a instanceof bird)
// console.log('9', typeof animal.prototype)
// console.log('10', Object.prototype.isPrototypeOf(animal.prototype))
// console.log('11', Object.prototype.isPrototypeOf(bird.prototype))
// console.log('12', Object.prototype.isPrototypeOf(a))
// console.log('13', b)
// b.ani.legs()
// console.log('14', b instanceof animal)

//-----------------------------------------------------------------------

// function animal(name) {
//     this.name = name;          //own property
//     this.n = function () {
//         console.log(this.name, this.numsoflegs + "legs")
//     }
// }
// animal.prototype.numsoflegs = 4         //prototype property
// animal.prototype.ani = { eat: 3, legs: function () { return console.log(this.eat) } }

// //function bird() {}

// function fish() { }

// fish.prototype = Object.create(animal.prototype)   //prototype inharitance it only access prototype properties
// fish.prototype.constructor = fish
// let c = new fish()
// c.ani.legs()
// console.log(c.constructor)

//--------------------------------------------------------------------------------------

function animal(arg) {
    let name = arg;          //protect data
    this.age = 2
    this.n = function () {
        console.log(name, this.age)
    }
}

const a = new animal('dog')
a.name = 'cat'          //can't modify
a.age += 2         //it can modify
a.n()
