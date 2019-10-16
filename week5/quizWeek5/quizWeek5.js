

/* SOLUTION eval() */
// const bonusFormula = 'employee.bonus = employee.revenue * 0.2';
// const e = {revenue: 10000, bonus: null}

// const bonusCalculation = (employeeDetails) => {
//     const employee = employeeDetails;
//     eval(bonusFormula);
// }

// bonusCalculation(e)

// document.writeln(e.bonus === e.revenue * 0.2);

// Object.keys(e).forEach(key => {
//     let value = e[key];

//      console.log(`${key}: ${value}`);
// });


/*****************************************************************/


/* SOLUTION Function */
const bonusFormula = 'employee.revenue * 0.2';
const e = {revenue: 10000, bonus: null}

const bonusCalculation = Function("employee", "return employee.bonus = " + bonusFormula);

bonusCalculation(e)

document.writeln(e.bonus === e.revenue * 0.2);

Object.keys(e).forEach(key => {
    let value = e[key];

     console.log(`${key}: ${value}`);
});

