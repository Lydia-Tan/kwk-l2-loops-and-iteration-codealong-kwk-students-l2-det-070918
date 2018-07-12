// Code your solutions in this file
function printBadges(array){
  for(var i = 0; i < array.length; i++){
   console.log("Welcome " + array[i] + "!" + " You are employee #" + i)
 }
 return array
}

var heads = false;
var tails = 0;
function tailsNeverFails(){
  while(heads === false){
    var flip = Math.random(1, 2)
    if(flip === 1){
      heads++
    }
  }
}
