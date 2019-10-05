var coinFlip = Math.random();
var coinFlip = Math.round(coinFlip);
var result;

var choice = window.prompt("Select 'heads' or 'tails'.");

if (coinFlip>0){
    result='tails';
}
else if (coinFlip<1){
    result='heads';
}
if (choice == 'heads' && result == 'heads' ){
    window.alert("The flip was heads and you chose heads...you win!");
}
else if (choice == 'heads' && result == 'tails' ){
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if (choice == 'tails' && result == 'heads' ){
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if (choice == 'tails' && result == 'tails' ){
    window.alert("The flip was tails and you chose tails...you win!");
} 
