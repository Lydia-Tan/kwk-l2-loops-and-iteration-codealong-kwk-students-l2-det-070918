// Code your solutions in this file
function printBadges(array){
  for(var i = 0; i < array.length; i++){
   console.log("Welcome " + array[i] + "!" + " You are employee #" + (i + 1) + ".")
 }
 return array
}


function tailsNeverFails(){
var heads = false;
var tails = 0;
  while(heads === false){
    var flip = Math.random()
    if(flip >= 0.5){
      tails++
    }
    else{
      heads = true
    }
  }
 
return("You got " + tails + " tails in a row!") 
}