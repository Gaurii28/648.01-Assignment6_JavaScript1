var x=window.prompt("Please enter the first number!");
var y=window.prompt("Please enter the second number!!");
if (x>y){ 
    document.write("First number"+ " " + x + " "+" is the larger number.");
}
else if(x<y){
    document.write("Second number"+ " " + y +" "+ "is the larger number.");
}
else{
    document.write("First number"+" " + x + " and "+ "Second number"+" " + y  + " are eqaul." );
}