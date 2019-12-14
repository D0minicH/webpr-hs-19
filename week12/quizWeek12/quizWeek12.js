

/* Q28: Refresher: Callbacks */

// function handle(callback) {
//     const result = [];
//     callback(result);
//     callback(result);
//     return result;
// }

// document.writeln( handle( it => it.push(1)).length === 2)

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// document.writeln( handle( it.push(1) ).length === 1)

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// document.writeln( handle( it => it.push(1) ).length === 1)

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// let it = [];
// document.writeln( handle( it.push(1) ).length === 1)

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// document.writeln( handle( () => it.push(1) ).length === 1)

/***********************************************/

// function handle(callback) {
//   const result = [];
//   callback(result);
//   return result;
// }

// document.writeln( handle( () => [1] ).length === 1)

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// let it = [];
// document.writeln( handle( it => it.push(1) ).length === 1)


/***********************************************************************************************************/

/* Q29: Refresher: Observable */

//same for all choices
const Observable = value => {
  const listeners = [];
  return {
    onChange: callback => listeners.push(callback),
    getValue: () => value,
    setValue: val => {
      if (value === val) return;
      value = val;
      listeners.forEach(listener => listener(val));
    }
  }
};

/***********************************************/

// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue('black');
// color.setValue('white');

// document.writeln( updateCount === 2 )

/***********************************************/

// const color = Observable('white');

// document.writeln( color.getValue() === 'white' )

/***********************************************/

// const color = Observable('white');
// color.setValue('black');

// document.writeln( color.getValue() === 'black' )

/***********************************************/

// const color = Observable('white');
// let observed = null;
// color.onChange( val => observed = val);

// document.writeln( observed === color.getValue() )

/***********************************************/

// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue('black');

// document.writeln( updateCount === 1 )

/***********************************************/

// const color = Observable('white');
// color.value('black');

// document.writeln( color.getValue() === 'black' )

/***********************************************/

// const color = Observable('white');
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue('white');

// document.writeln( updateCount === 1 )

/***********************************************/

// const color = Observable('white');
// let updateCount = 0;
// const updateListener = val => updateCount++;

// color.setValue('black');

// document.writeln( updateCount === 1 )

/***********************************************************************************************************/

/* Q30: Refresher: Promises */

// const idPromise = x => new Promise( resolve => resolve(x));

// const writer = x => {
//   document.writeln(x);
//   return idPromise(x);
// };

// idPromise(1)
//   .then( writer )
//   .then( it => it + 1)
//   .then( writer );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// idPromise(1)
//   .then( it => { document.writeln(it); return it; } )
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// idPromise(1)
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// idPromise(1)
//   .then( it => it)
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// idPromise(1)
//   .then( it => { document.writeln(it); return idPromise(it); } )
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// idPromise(1)
//   .then( it => document.writeln(it) )
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// const writer = x => {
//   document.writeln(x);
//   return idPromise(x);
// };

// const filterEven = n => n % 2 === 0 ? n : undefined;

// idPromise(1)
//   .then( writer )
//   .then( filterEven )
//   .then( writer );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// const writer = x => {
//   document.writeln(x);
//   return idPromise(x);
// };

// idPromise(1)
//   .then( writer )
//   .then( it => document.writeln(it) );

/***********************************************/

// const idPromise = x => new Promise( resolve => resolve(x));

// const writer = x => {
//   document.writeln(x);
//   return idPromise(x);
// };

// const filterEven = n => { if (n % 2 === 0) return n; else throw Error("not even") };

// idPromise(1)
//   .then( writer )
//   .then( filterEven )
//   .then( writer )
//   .catch( err => {} );

/***********************************************/

const idPromise = x => new Promise( resolve => resolve(x));

document.writeln( idPromise(1) );