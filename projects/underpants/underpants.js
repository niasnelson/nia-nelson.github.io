// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value) {
    // YOUR CODE BELOW HERE //
    //determine if input value is a string
    if (typeof value === 'string'){
        return 'string'
    //else determine if value is a number
    }else if (typeof value === 'number'){
        return 'number'
    //else determine if value is undefined
    }else if (typeof value === 'undefined'){
        return 'undefined'
    //else determine if value is boolean
    }else if (typeof value === 'boolean'){
        return 'boolean'
    //else determine if value is a function
    }else if (typeof value === 'function'){
        return 'function'
    //else determine if value is an array
    }else if (Array.isArray(value) === true){
        return 'array'
    //else determine if value is null
    }else if (value === null){
        return 'null'
    //else determine if value is a date
    }else if (value instanceof Date === true){
        return 'date'
    //else it must be an object
    }else {
        return 'object'
    };
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
  if(number === undefined || (typeof number !== "number")){
    return array[0];
  }else if(!Array.isArray(array) || number <= 0){
    return [];
  }else{
    return [].slice.call(array, 0, number) ;
  }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
  if(number === undefined || (typeof number !== "number")){
    return array[array.length - 1];
  }else if(!Array.isArray(array) || number <= 0){
    return [];
  }else{
    return array.slice(-number) ;
  }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //iterate through the input array using a for loop
      for (var i = 0; i < array.length; i++){
        //determine if the current array value is equal to the input value
       if(array[i] === value){//array[2] === "c"// "c" === "c"
         return i;
       }
      }
      return -1;
    }

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
  for(var i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    
    }
  }
return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
  return[...new Set(array)];
  
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
  var results = [];
  for(var i = 0; i < array.length; i++){
    if(func(array[i], i, array) === true){
      results.push(array[i]);
    }   
  }  
  return results;
}

  
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
  var results = [];
  for(var i = 0; i < array.length; i++){
    if(func(array[i], i, array) === false){
      results.push(array[i]);
    }
  }
  return results;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
  var result1 = [];
  var result2 = [];
  for(var i = 0; i < array.length; i++){
    if(func(array[i], i, array) == true){
      result1.push(array[i]);
    }else if(func(array[i], i, array) == false){
      result2.push(array[i]);
    } 
  }
  return [result1, result2];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //create output array
    var mapped = [];
    //determine if the input collection is an array
    if(Array.isArray(collection)){
      //iterate throught the array using a for loop
      for(var i = 0; i < collection.length; i++){
        //invoke the callback function on the current element of the array, the current index, and the array
        var result = func(collection[i], i, collection);
        mapped.push(result);//also could use mapped.push(func(collection[i], i, collection));
      }
    }else {
      //else the input collection is an object
      //iterate through the object using a for in loop
      for(var key in collection){
          //invoke the callback function, passing in the current value of the object, the current key, and the collection itself
        let result = func(collection[key], key, collection);
        mapped.push(result);
      }
    } 
    return mapped;
  }


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
  return array.map(function(object){
    return object[property];
  });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    /*
  let collection = [1, 2, 3, 4];
  let func; // undefined
  */
  //determine if func is undefined
  if(func === undefined){
    //determine if the input collection is an array
      if(Array.isArray(collection)){
        //iterate through collection
        for(var i = 0; i < collection.length; i++){
          if(!collection[i]){//If the current value is     FALSEY
            return false;
          }
        }
        
      }else {//else it's not an array
        //iterating through collection as an object
        for(let key in collection){
          if(!collection[key]){
            return false;
          }
        }
        
      }
  }else{//else it is defined (meaning it's been passed in as an argument)
    //determine if collection is an array
    if(Array.isArray(collection)){
      //if array, iterate through collection using for loop
      for (let i = 0; i < collection.length; i++){
        //determine if the result of invoking func on the current value, index, and collection resolves to false
        if(func(collection[i], i, collection) === false){// pass the current value, current index, and collection into func as args
          return false;
        }
      }
    }
      
    //else it's not an array
      //iterate through collection using a for in loop
    
  }
  return true;
  }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
  //determine if func is undefined
  if(func === undefined){
    if(Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++){
        if(collection[i]){
          return true;
        }
      }
    }else{
      for(let key in collection){
        if(collection[key]){
          return true;
        }
      }
    }
  }else{
    if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
        if(func(collection[i], i, collection) == true){
          return true;
        }
      }
    }else{
      for(let key in collection){
        if(collection[key]){
          return true;
        }
      }
    }
  }
  return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //create accumulator variable
    let accumulator;
    //determine if seed was not passed in
    if(seed === undefined){
      accumulator = array[0];
      //"continue to the next element" and iterate through the input array
      for(let i = 1; i < array.length; i++){
        accumulator = func(accumulator, array[i], i, array); //func(1, 2, 1, [1, 2, 3]) => 3
      }
    }else {
        //else seed was passed in
      accumulator = seed;
      for (let i = 0; i < array.length; i++){
        accumulator = func(accumulator, array[i], i, array);
      }
    }
    return accumulator;
  }

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...inputs){
//copy properties from object2 to object1
  Object.assign(object1, ...inputs);
//copy properties from other objects to object1 in the order they are passed in

//return updated object1
return object1;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
