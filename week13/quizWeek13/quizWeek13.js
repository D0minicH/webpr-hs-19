

/* Q28a: map/filter/reduce refresher */

// Implement a function named 'palindrome' that tells whether a given string
// is the same when read left-to-right and right-to-left, ignoring upper/lowercase differences
// and any characters outside 'a' to 'z'. For example

// You must use the following helper functions (they are provided):
const str2chars = str  => [...str];            // convert a string to an array of chars
const isAlpha   = char => char.match(/[a-z]/); // char is in the alphabet

// The question title contains implementation hints.

//SOLUTION
const palindrome = stringToTest => {
    const charArray = str2chars(stringToTest)
                        // make all characters lowercase
                        .map(character => character.toLowerCase())
                        // filter out characters outside alphabet
                        .filter( character => isAlpha(character));

    const arrayLength = charArray.length

    for (let i = 0; i < arrayLength/2; i++) {
        if (charArray[i] !== charArray[arrayLength - 1 - i]) {
            return false;
        }
    }
    return true
}

// Your solution will be tested against:
document.writeln(   palindrome("Amore, Roma!") 
                    && palindrome("Madam, I'm Adam!") 
                    && palindrome("Never odd or even.") 
                    && ! palindrome("Amore"))

document.writeln(palindrome('ABBA'))  // true
document.writeln(palindrome('Abba'))  // true
document.writeln(palindrome('A man, a plan, a canal: Panama!')) // true
