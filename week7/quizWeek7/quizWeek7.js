

/* ES6 classes */

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     isCool(){
//         return this.name.length > 3;
//     }
// }

// const p = new Person("Dierk")
// const joe = {
//     name: "joe",
//     cool: p.isCool
// }

// document.writeln(joe.cool());


/***********************************************/

// const p = new Person("Dierk")
// document.writeln(p.name === "Dierk")

/***********************************************/

// const p = new Person("Joe")
// p.prototype.isCool = () => true
// document.writeln(p.isCool())


/***********************************************/

// const p = new Person("Joe")
// p.isCool = () => true
// document.writeln(p.isCool())

/***********************************************/

// const p = new Person("Dierk")
// document.writeln(p.isCool())

/***********************************************/

// const p = new Person("Joe")
// Person.prototype.isCool = () => true
// document.writeln(p.isCool())

/***********************************************/

// class Person {
//     isCool(){
//         return this.name.length > 3;
//     }
// }
// const p = new Person()
// p.name = "Dierk"
// document.writeln(p.isCool())

/***********************************************/

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     isCool(){
//         return name === 'Dierk';
//     }
// }

//  const p = new Person("Dierk")
//  document.writeln(p.isCool())

/***********************************************/

// class Person {
//     constructor(name){
//     }
//     isCool(){
//         return this.name.length > 3;
//     }
// }

//  const p = new Person("Dierk")
//  document.writeln(p.isCool())

/***********************************************************************************************************/

/* Prototypes and inheritance */

// class Person {}
// const p = {}
// Object.setPrototypeOf(p, Person.prototype)
// document.writeln(p instanceof Person)

/***********************************************/

// class Person {}
// class Student extends Person {}

// const s = new Student()

// document.writeln(s instanceof Person)

/***********************************************/

// class Person {
//     constructor(name){
//         this.name = name
//     }
//     isCool(){
//         return this.name.length > 3
//     }
// }

// const p = new Person("Dierk")

// document.writeln(p instanceof Person)

/***********************************************/

// class Person {}
// class Student {}

// const s = new Student()
// Object.setPrototypeOf(Student, Person)

// document.writeln(s instanceof Person)

/***********************************************/

// class Person {}
// class Student {}

// const s = new Student()
// Object.setPrototypeOf(s, Student.prototype)

// document.writeln(s instanceof Person)

/***********************************************/

// class Person {}
// class Student {}

// const s = new Student()
// Object.setPrototypeOf(Student.prototype, Person.prototype)

// document.writeln(s instanceof Person)

/***********************************************/

// class Person {}
// class Student extends Person {}

// const s = new Student()

// document.writeln(s instanceof Student)

/***********************************************/

// class Person {}
// const p = {}
// Object.setPrototypeOf(p, Person)
// document.writeln(p instanceof Person)

/***********************************************/

// class Person {}
// class Student {}

// const s = new Student()
// Object.setPrototypeOf(s, Person.prototype)

// document.writeln(s instanceof Student)

/***********************************************************************************************************/

/* Function composition */

const inc = x => x + 1
const double = x => x * 2

const doStuff = x => {
    const first = inc(x)
    const second = double(first)
    return third = double (second)
}
document.writeln(doStuff(1))

const add = x => x + 2
const mult = x => x * 4

function then(functionToCombine){

}

document.writeln((1 + 2) * 4 + 2)
//document.writeln(add.then(mult).then(add) (1) === (1 + 2) * 4 + 2)