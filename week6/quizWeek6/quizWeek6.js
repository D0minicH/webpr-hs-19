

/* Prototype and 'new' */

// const Empty = ( () => {
//     function Empty(){}
//     return Empty;
// }) ();

// const empty = Empty;
// document.writeln(empty instanceof Empty);

/***********************************************/

// const Empty = ( () => {
//     function Empty(){}
//     return Empty;
// }) ();

// const empty = new Empty;
// const also = new Empty;

// Empty.prototype.answer = 42;

// document.writeln(empty.answer === 42 && also.answer === 42);

/***********************************************/

// function Empty() {}

// const empty = new Empty();

// Empty.prototype.answer = 42;

// document.writeln(empty.answer === 42);

/***********************************************/

// const Empty = ( () => {
//     function Empty(){}
//     return Empty;
// }) ();

// const empty = new Empty;
// document.writeln(empty instanceof Empty);


/***********************************************************************************************************/

/* Safe object construction */

const Person = name => {
    let age = 0;
    return {
        getAge: () => age,
        setAge: newAge => age = newAge,
        getName: () => name,
        setName: newName => name = newName
    }
}

// const me = Person("Myself");
// me.age = 50;
// document.writeln(me.getAge() === 50);

/***********************************************/

// const me = Person("Myself");
// me.setName("Sherlock");
// document.writeln(me.getName() === "Sherlock");

/***********************************************/

// const me = Person("Myself");
// me.setAge(50);
// document.writeln(me.getAge() === 50);

/***********************************************/

// const me = Person("Myself");
// me.name = "***";
// document.writeln(me.getName() === "***");


/***********************************************************************************************************/

/* Array equivalence */

const xs1 = [1,2,3];
const ys1 = [1,2,3];

const xs2 = [3,2,1];
const ys2 = 1;

const xs3 = [1,'2',3];
const ys3 = [1,'2',3];

const xs4 = [1,2,3];
const ys4 = [1,2,3];

Array.prototype.eq = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths
    if (this.length != array.length)
        return false;

    for (const i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] !== array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

// document.writeln(xs1.eq(ys1));
// document.writeln( ! xs2.eq(ys2));
// document.writeln(xs3.eq(ys3));
// document.writeln( ! xs3.eq(ys4));
// document.writeln( ! xs4.eq(ys3));

document.writeln(xs1.eq(ys1) && ! xs2.eq(ys2) && xs3.eq(ys3) && ! xs3.eq(ys4) && ! xs4.eq(ys3));