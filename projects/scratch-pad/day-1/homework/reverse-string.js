// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(str) {
    // YOUR CODE GOES BELOW HERE //
    //create output string that is reversed
      var reversed = "";
      //iterate through string
      for (var i = str.length - 1; i >= 0; i--){
        //take the value at the current index and add to reverse
        reversed += str[i]; //reverse = "" + "x" => "x"
      }
    
      // return reveresed
      return reversed; // "xelA"
    }
    
    
    
    
    
    // YOUR CODE GOES ABOVE HERE //

    console.log(reverseString("Alex")); // => "xelA"



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}