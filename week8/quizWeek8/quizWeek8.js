/* Q17: Object encoding without class, this, or new */

// function ToDo(text){
//     let done = false;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   done = true
//     }
// }

// let todo = ToDo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text){
//     let done = false;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   () => done = true
//     }
// }

// let todo = ToDo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text){
//     let done = false;
//     const check = () => this.done = true;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   check
//     }
// }

// let todo = ToDo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text, done){
//     const check = () => done = true;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   check
//     }
// }

// let todo = ToDo("buy milk", false);
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text){
//     const done = false;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   () => done = true
//     }
// }

// let todo = ToDo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text, done){
//     function check (){ done = true }
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   check
//     }
// }

// let todo = ToDo("buy milk", false);
// todo.check();
// document.writeln(todo.isDone());

/***********************************************/

// function ToDo(text){
//     let done = false;
//     const check = () => done = true;
//     return{
//         getText: () => text,
//         isDone:  () => done,
//         check:   check
//     }
// }

// let todo = ToDo("buy milk");
// todo.check();
// document.writeln(todo.isDone());

/***********************************************************************************************************/

/* Q18: Callback functions used well and badly */

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// let it = [];
// document.writeln( handle( it => it.push(1) ).length === 1 )

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback( [] );
//     return result;
// }

// let it = [];
// document.writeln( handle( it => it.push(1) ).length === 1 )

/***********************************************/

// function handle(count, callback) {
//     const result = [];
//     for (let i = 0; i < count; i++){
//         callback(result);
//     }
//     return result;
// }

// document.writeln( handle(3, it => it.push(1) ).length === 3 )

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// document.writeln( handle( it => it.push(1) ).length === 1 )

/***********************************************/

// function handle(callback) {
//     return callback([]);
// }

// document.writeln( handle( it => { it.push(1); return it; } ).length === 1 )

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }

// document.writeln( handle( () => [1] ).length === 1 )

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     callback(result);
//     return result;
// }

// document.writeln( handle( it => it.push(1) ).length === 2 )

/***********************************************/

// function handle(callback) {
//     const result = [];
//     callback(result);
//     return result;
//   }
  
//   let it = [];
//   document.writeln( handle( it.push(1)).length === 1 );

/***********************************************/

// function handle(callback) {
//   const result = [];
//   callback(result);
//   return result;
// }

// document.writeln(handle(() => it.push(1)).length === 1);

/***********************************************/

// function handle(callback) {
//   const result = [];
//   callback(result);
//   return result;
// }

// let it = [];
// document.writeln( handle( () => it.push(1)).length === 1 );

/***********************************************/

// function handle(callback) {
//     const result = [];
//     return callback(result);
//   }
  
//   let it = [];
//   document.writeln( handle( () => [1]).length === 1 );

/***********************************************/

// function handle(callback) {
//   const result = [];
//   callback(result);
//   return result;
// }

// document.writeln( handle( it => it.push(1)).length === 1 );

/***********************************************************************************************************/

/* Q18a: failsafe callback */

const failSafe = defaultValue => callback => callbackArgument => {
    try{ return callback(callbackArgument); }

    catch(err){ return defaultValue; }
}

const doError = x => { throw new Error() };
const errorCount = failSafe(1) (doError);

document.writeln( failSafe(false)(x => x)(true) );
document.writeln( failSafe(true)(doError)(null) );
document.writeln( errorCount(null) === 1 );
document.writeln( failSafe(false)(x => x)(true) && failSafe(true)(doError)(null) && errorCount(null) === 1 );