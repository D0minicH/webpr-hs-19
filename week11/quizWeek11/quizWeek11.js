
/* Q26: Scheduler */

// execute asynchronous tasks in strict sequence, definition from lecture
const Scheduler = () => {
    let inProcess = false;
    const tasks = [];
    function process() {
        if (inProcess) return;
        if (tasks.length === 0) return;
        inProcess = true;
        const task = tasks.pop();
        const prom = new Promise( (ok, reject) => task(ok) );
        prom.then( _ => {
            inProcess = false;
            process();
        });
    }
    function add(task) {
        tasks.unshift(task);
        process();
    }
    return {
        add: add,
        addOk: task => add( ok => { task(); ok(); }) // convenience
    }
};

/***********************************************/

// let state = 3;

// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state = state -2;
//         ok();
//     }, 100)
// });

// scheduler.add(ok => {
//     state = state -1;
//     ok();
// });

// scheduler.add(ok => {
//     console.log(state);
//     ok();
// });

// console.log('x')

/***********************************************/

// let state = [0];

// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });

// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });

// document.writeln(state);

/***********************************************/

// let state = [0];

// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state.push(1);
//         ok();
//     }, 100)
// });

// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });

// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });

/***********************************************/

// let state = 3;

// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state = state - 2;
//         ok();
//     }, 100)
// });

// scheduler.add(ok => {
//     state = state - 1;
//     ok();
// });

// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });

/***********************************************/

// let state = 3;

// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout(_ => {
//         state = state -2;
//         ok();
//     }, 100)
// });

// scheduler.add(ok => {
//     state = state -1;
//     ok();
// });

// scheduler.add(ok => {
//     document.writeln(state);
//     ok();
// });

/***********************************************************************************************************/

/* Q27: Data Flow Variable */

// a dataflow abtstraction that is not based on concurrency but on laziness
// defined in the lecture
const DataFlowVariable = howto => {
    let value = undefined;
    return () => {
        if (value !== undefined) { return value }
        value = howto();
        return value;
    }
};

/***********************************************/

const x = DataFlowVariable(() => y() * 2);
let y = DataFlowVariable(() => 1);

x();
y = DataFlowVariable(() => 2);

document.writeln(x())

/***********************************************/

// const x = DataFlowVariable(() => y() * 2);
// let y = DataFlowVariable(() => 1);

// document.writeln(x())

/***********************************************/

// const x = DataFlowVariable(() => y() * 2);
// let y = DataFlowVariable(() => 1);
//     y = DataFlowVariable(() => 2);

// document.writeln(x())


