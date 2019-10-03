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

const Triple = x => y => z => f => f(x)(y)(z);
const tfirstname = x => y => z => x;
const tlastname  = x => y => z => y;
const tage       = x => y => z => z;



// Either
const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => f => g => e (f) (g);


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




