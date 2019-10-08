// atoms
const id    = x =>      x;
const konst = x => y => x;


// derived
const fst  = konst;
const snd  = konst(id);

const T = fst;
const F = snd;

//and
const and = p => q => p(q)(p);
//const and = p => q => p(q(T)(F)) (p(F)(F));

//or
const M   = f => f(f); //Mockingbird
//const or  = x => y => x(x(T)(T)) (y(T)(F));
//const or  = x => y => x(x)(y);
//const or  = x => x(x); --> gleich wie M
const or  = M;

const Pair = x => y => selector => selector(x)(y);
const firstname = fst;
const lastname  = snd;

/********************************************/
const pair = a => b => f => f(a)(b)
const frst = p => p(T)
const scnd = p => p(F)

const pairEq = a => b => frst(a) === frst(b) && scnd(a) === scnd(b)

const pairMap = f => p => pair(f(frst(p))) (f(scnd(p)))

const pairPlus = a => b => pair(frst(a) + frst(b)) (scnd(a) + scnd(b))

const oneTwo = pair(1)(2)
//frst(oneTwo) = 0;
const square = x => x*x

const sum = pairPlus(oneTwo)(oneTwo)
const result = pairMap(square)(oneTwo)
//document.writeln(frst(oneTwo) === 0)
// document.writeln(pairEq(result)(pair(1)(4)))
//document.writeln(pairEq(sum)(pair(2)(4)))


/********************************************/

const s1 = x => y => z => x
const s2 = x => y => z => y
const s3 = x => y => z => z

const Triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1)
const b = t => t(s2)
const c = t => t(s3)

const person = Triple
const fstname = a
const lstname = b
const age = c

// const bran = person("Brendan")("Eich")(50)
const bran = person("Brendan")
const raven = bran("Stark")(16)
const eich = bran("Eich")(50)

// const oneTwoThree = Triple(1)(2)(3)
const oneTwoThree = Triple(1)

//document.writeln("Triple1: " + (age(raven) === 16))
//document.writeln("Triple2: " + (a(oneTwoThree) === 1))
//document.writeln("Triple3: " + (fstname(bran) === "Brendan"))
//document.writeln("Triple4: " + (a(oneTwoThree) === 1))
//document.writeln("Triple5: " + (fstname(bran) === "Brendan"))

const tfirstname = x => y => z => x;
const tlastname  = x => y => z => y;
const tage       = x => y => z => z;



// Either
const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => f => g => e (f) (g);

const safeDiv = num => divisor =>
    divisor === 0
    ? Left("Cannot divide by 0!")
    : Right(num / divisor);

const eResultFail = safeDiv(1)(0)
const eResultResult = safeDiv(4)(2)

/***************************************************************************/
//SOLUTION 'either' enforces error handling
const eShow = division => either(division)
                            (msg => (msg))
                            (val => ("Result is: " + val))
/***************************************************************************/
document.writeln(eShow(eResultFail));
document.writeln(eShow(eResultResult));

// either(eResult)
//       (msg => document.writeln(msg))

// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




