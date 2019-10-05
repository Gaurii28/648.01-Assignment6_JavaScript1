var coinFlip;
for(var i =1;i<=10;i++){
    coinFlip = Math.round(Math.random(coinFlip));
    if(coinFlip == 1){
        window.console.log("tails \n");
    }
    else if(coinFlip == 0){
        window.console.log("heads \n");
    }
}