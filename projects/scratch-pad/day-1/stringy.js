// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {//"Alex" => 4
    // YOUR CODE BELOW HERE //
    //return the length of the input string using the .length property
    return string.length;

    // YOUR CODE ABOVE HERE //
}
//length ("Alex"); // => 4
console.log(length(Alex));

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {//"HELLO" => "hello"
    // YOUR CODE BELOW HERE //
    //return a string as lowercase using the .toLowerCase property
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {//"hello" => "HELLO"
    // YOUR CODE BELOW HERE //
    //return a string as uppercase using the .toUpperCase property
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //use .split & .join to split the string then join it together with a dash also use .toLowerCase property to make the return lowercase
    return string.split(" ").join("-").toLowerCase(); //"Hello World" => "hello-world"

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //use charAt property to obtain the first character in the string and compare it to the character argument, use .toLowerCase property to ensure the function is case insensitive
    if (string.charAt(0).toLowerCase() === char.toLowerCase()){
        return true; //(beginsWith("Nia", "N")); => true
    }else {
        return false; //(beginsWith("Nia", "i")); => false
    }  
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    if (string.charAt(string.length - 1).toLowerCase() === char.toLowerCase()){
        return true;
    }else {
        return false;
    }  

   
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //Return two input strings concatenated as one
    return stringOne + stringTwo;
   
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //return args array of strings as one joined statement
   return args.join("");
   


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //use if/else and .length property to compare the length of two strings, return the longest string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    }else {
        return stringTwo;
    }
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //use if/else statements to compare alphabetical order of arguments
    if (stringOne < stringTwo){
        return 1; //return 1 if stringOne is higher in alphabetical order than stringTwo when going from A to Z
    }else if (stringOne > stringTwo){
        return -1; //return -1 if stringTwo is higher in alphabetical order than stringOne when going from A to Z
    }else {
        return 0; //return 0 if stringOne and stringTwo are equal in alphabetical order
    }
    


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //use if/else statements to compare the alphabetical order of stringOne and stringTwo
    if (stringOne > stringTwo){
            return 1; //return 1 if stringOne is lower in alphabetical order than stringTwo when going from Z to A
    }else if (stringOne < stringTwo){
            return -1; //return -1 if stringTwo is lower in alphabetical order than stringTwo when going from Z to A
    }else {
            return 0 // return 0 if stringOne and stringTwo are equal in alphabetical order
        }
    }



    // YOUR CODE ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
    }
