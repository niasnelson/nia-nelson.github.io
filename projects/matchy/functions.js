/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(var i = 0; i < animals.length; i++ ){
        if(animals[i].name === name){
            return animals[i];
        }
    }
    return null;
 };

 console.log(search(animals, "Buddy"));


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++ ){
        if(animals[i].name === name){
            return animals[i] = replacement;
        }
    }
    return animals;
 };

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++ ){
        if(animals[i].name === name){
            animals.splice(0, 1, [i]);
        }
    
    }
    return animals;
   
};


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    var nameMatches = false;
  
    //determine if the animals array already contains an animal object with a name property matching the input animal
  for (var i = 0; i < animals.length; i++){
    if(animals[i].name === animal.name){
      nameMatches = true;
    }
  }
  //determine if  no match exists AND the input animal object has a name property greater than zero and the input animal object has a length property greater than zero
  //if true, add input animal object to animals array
  if(nameMatches === false && animal.name.length > 0 && animal.species.length > 0){
    animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
