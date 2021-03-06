

/* Q23: Promise */

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const filterEven = n => n % 2 === 0 ? n : undefined;

// idPromise(1)
//     .then( writer )
//     .then( filterEven )
//     .then( writer);

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then( it => it )
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const inc = n => n + 1;
// const filterEven = n => n % 2 === 0 ? n : undefined;

// idPromise(1)
//     .then( writer )
//     .then( inc )
//     .then( writer )
//     .then( filterEven )
//     .then( writer);

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then( it => document.writeln(it) )
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const filterEven = n => { 
//     if (n % 2 === 0) return n;
//     else throw Error("not even")
// };

// idPromise(1)
//     .then( writer )
//     .then( filterEven )
//     .then( writer)
//     .catch( err => {});

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// idPromise(1)
//     .then( writer )
//     .then( it => it + 1 )
//     .then( writer );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then( it => {document.writeln(it); return it; })
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// document.writeln(idPromise(1));

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// idPromise(1)
//     .then( writer )
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then( it => {document.writeln(it); return idPromise(it); })
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// idPromise(1)
//     .then( writer )
//     .then( it => it + 1 )
//     .then( writer );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const filterEven = n => n % 2 === 0 ? n : undefined;

// idPromise(1)
//     .then( writer )
//     .then( filterEven )
//     .then( writer);

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// idPromise(1)
//     .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise(resolve => resolve(x));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x);
// };

// const filterEven = n => {
//     if( n % 2 === 0 ) return n;
//     else throw Error("not even");
// };

// idPromise(1)
//     .then( writer )
//     .then( filterEven )
//     .then( writer)
//     .catch(err => {});

/***********************************************************************************************************/

/* Q24: Async / Await */

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x)
// };

// const inc = n => idPromise(n + 1);
// const filterEven = n => n % 2 === 0 ? idPromise(n): failPromise("not even");

// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x = await filterEven(x);
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x)
// };

// const foo = async i => {
//     let x = await idPromise(i);
//     x = await writer(x);
// };
// foo(1);

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x)
// };

// const inc = n => idPromise(n + 1);

// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x)
// };

// const foo = async i => {
//     let x = await idPromise(i);
//     x.then(writer);
// };
// foo(1);

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const writer = x => {
//     document.writeln(x);
//     return idPromise(x)
// };

// const inc = n => idPromise(n + 1);
// const filterEven = n => n % 2 === 0 ? idPromise(n): failPromise("not even");

// const foo = async i => {
//     let x = await idPromise(i);
//     while (x < 4) {
//         x = await filterEven(x).catch( err => {});
//         x = await writer(x);
//         x = await inc(x);
//     }
// };
// foo(1);

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));
// const failPromise = err => new Promise( (resolve, reject) => reject(err));

// const foo = async i => {
//     let x = await idPromise(i);
//     document.writeln(x)
// };
// foo(1);

/***********************************************************************************************************/

/* Q24a: Make a NullSafe monad in the Promise fashion */

// *Copy* the following code into the edit area and fill the ___ gaps.

const NullSafe = x => {
    const isNullSafe = y => y && y.then;
    const maywrap    = y => isNullSafe(y) ? y : NullSafe(y) ; // todo: if y is not NullSafe yet, make it so
    return {
       then: fn => {
          // return x => x ? maywrap(x) : fn(x);
           let res = maywrap(x).then(a => !a ? fn(a) : a.then ).catch(() => {});
           return res;
        }
    }
};

// (1) if x is not null or undefined, call fn(x); either way, make sure the result is a NullSafe 

// Fill the gaps such that NullSafe objects can be chained with their "then" function
// just like Promises do, incl. auto-promotion of result values to NullSafe objects.

NullSafe(1).then(console.log("A"));                   // will call the log
NullSafe(null).then(console.log("B"));                // will not call the log
// NullSafe(2).then( x => null).then(console.log("C"));  // will not call the log

// Solution will be tested against:
x_ = 1;
y_ = 2;

// document.writeln(
//     NullSafe(x_)
//     .then( x => x*2)          // must auto-promote
//     .then( x => NullSafe(x))  // must not auto-promote
//     .then( x => y_ = x + 1)   // store value, check no double promotion
//     .then( x => null)         // jump over rest
//     .then( x => x.mustNotBeCalled) !== null && y_ === x_ * 2 + 1)
