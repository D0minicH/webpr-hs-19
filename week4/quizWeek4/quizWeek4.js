
const times = a => b => a * b;
//document.writeln([1,2,3].map(times(2)));

const plus = (accu, cur) => accu + cur;
//document.writeln([1, 2, 3].reduce(plus));


/* map */
const twice = x => 2*x;

document.writeln("map: "+ ([1,2,3].map(twice).toString() === "2,4,6") + "<br>");


/* filter */
const divides = x => y => y % x === 0;

document.writeln("filter: " + ([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6") + "<br>");


/* reduce */
const join = x => (acc, cur) => `${acc}${x}${cur}`;

document.writeln("reduce: " + ([1,2,3].reduce(join('-'))) + "<br>");
document.writeln("reduce: " + ([1,2,3].reduce(join('-')) === '1-2-3'));