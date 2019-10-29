

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



xs1.eq(ys1) && ! xs2.eq(ys2) && xs3.eq(ys3) && ! xs3.eq(ys4) && ! xs4.eq(ys3);
