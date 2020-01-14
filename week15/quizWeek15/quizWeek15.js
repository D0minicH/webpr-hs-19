

/* Elvis & Guards */

// const door = { open: false};

// const open = door => {
//     if (door.open) {
//         return "already open";
//     }
//     door.open = true;
//     return "open";
// };

// document.write("Door is ");
// document.writeln(door.open || "closed");

/***********************************************/

// const door = { open: false};

// const open = door => {
//     if (door.open) {
//         return "already open";
//     }
//     door.open = true;
//     return "open";
// };

// document.write("Door is ");
// document.writeln(open(door) || "closed");

/***********************************************/

const door = { open: false};

const open = door => {
    let result = "open";
    door.open && (result = "already open");

    door.open = true;
    return result;
};

document.write("Door is ");
document.writeln(open(door) || "closed");

/***********************************************/

const door = { open: false};

const open = door => {
    if (door.open) {
        return "already open";
    }
    door.open = true;
    return "open";
};

document.write("Door is ");
document.writeln(open(door) ? open(door) : "closed");