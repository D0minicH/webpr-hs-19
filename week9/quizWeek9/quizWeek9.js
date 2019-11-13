

/* Q19: Observable values */

//Same for all choices
// const Observable = value => {
//     const listeners = [];
//     return {
//         onChange: callback => listeners.push(callback),
//         getValue: ()       => value,
//         setValue: val    => {
//             if(value === val) return;
//             value = val;
//             listeners.forEach(listener => listener(val));
//         }
//     }
// };

/***********************************************/

// const color = Observable("white");
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue("black");

// document.writeln( updateCount === 1 )

/***********************************************/

// const color = Observable("white");
// color.value("black");

// document.writeln(  color.getValue() === "black");

/***********************************************/

// const color = Observable("white");
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue("black");
// color.setValue("white");

// document.writeln( updateCount === 2 )

/***********************************************/

// const color = Observable("white");
// let observed = null;
// color.onChange( val => observed = val);

// document.writeln( observed === color.getValue() )

/***********************************************/

// const color = Observable("white");
// let observed = color.getValue();
// color.onChange( val => observed = val);

// document.writeln( observed === color.getValue() )

/***********************************************/

// const color = Observable("white");
// let observed = null;
// color.onChange( val => observed = val);

// color.setValue("black")

// document.writeln( observed === color.getValue() )

/***********************************************/

// const color = Observable("white");
// let updateCount = 0;
// color.onChange( _ => updateCount++);

// color.setValue("white");

// document.writeln( updateCount === 1 )

/***********************************************/

// const color = Observable("white");
// let updateCount = 0;
// const updateListener = val => updateCount++;

// color.setValue("black");

// document.writeln( updateCount === 1 )

/***********************************************/

// const color = Observable("white");
// color.setValue("black");

// document.writeln( color.getValue() === "black" )

/***********************************************/

// const color = Observable("white");

// document.writeln( color.getValue() === "white" )

/***********************************************************************************************************/

/* Q20a: Using Observable */

const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue));
        }
    }
};

const x_ = 1;
const y_ = 2;
const z_ = 5;

let sum = 0;                                 
const trackable = Observable(0);

trackable.onChange(val => sum = sum+val);

trackable.setValue(x_);
trackable.setValue(y_);
trackable.setValue(z_);

document.writeln(sum);
document.writeln(trackable.getValue() === z_ && sum === x_ + y_ + z_)

