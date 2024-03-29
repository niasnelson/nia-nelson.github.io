// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./nia-nelson.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
    
    }); 
  return males.length; // => [{male object}, {male object}, {male object}]
};

var femaleCount = function(array){
  var females = _.reduce(array, function(count, female){
    if(female.gender === 'female'){
      count += 1;
     }
  return count;
}, 0);
return females;
};

var oldestCustomer = function(array){
  var maxAge = 0;
    var oldest = _.reduce(array, function(name, customer){
    if(customer.age > maxAge){
    maxAge = customer.age;
      return customer.name
    
  } 
  return name;                                   
  }, "");
return oldest;
};

var youngestCustomer = function(array){
  var minAge = 100;
  var youngest = _.reduce(array, function(name, customer){
    if(customer.age < minAge){
      minAge = customer.age;
      return customer.name
    }
    return name;
  }, "");
  return youngest;
}

var averageBalance = function(array){

}

var firstLetterCount = function(array){  
  var firstLetter = _.reduce(array, function(count, customer){
  if(customer.name.charAt(0) === "S"){
   count += 1;
}
return count;
}, 0);
return firstLetter;
}

var friendFirstLetterCount = function(array){

}

var friendsCount = function(array){

}

var topThreeTags = function(array){

}

var genderCount = function(array){
  var gender = _.reduce(array, function(obj, customer){
  if(obj[customer.gender]){
    obj[customer.gender] += 1;
  }else{
    obj[customer.gender] = 1;
  }
  return obj;
}, {});

 return gender; 
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
