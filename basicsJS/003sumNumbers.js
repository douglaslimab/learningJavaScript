function calc(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);
    var result = numA + numB;
    document.querySelector("#result").innerHTML = result;
}
/*
var numA = parseInt(1);
var numB = parseInt(2);
var result = 0;
result = numA + numB;
console.log(result);
*/