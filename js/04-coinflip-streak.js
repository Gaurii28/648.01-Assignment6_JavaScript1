var coinFlip;
var i = 0;
do{
    coinFlip = Math.round(Math.random(coinFlip));
    if(coinFlip == 1){
        window.console.log("tails \n");
        var c = "tails";
    }
    else if(coinFlip == 0){
        window.console.log("heads \n");
        var c = "heads";
        i = i+1;
    } 
    
} while(c == "heads");
document.write("Number of 'heads' before 'tails' is "+ i + ".");