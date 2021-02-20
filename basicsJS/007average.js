function calc(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);
    result = (numA + numB) / 2;
    document.querySelector("#result").innerHTML = result;
}
document.querySelector("#result").innerHTML = 'Hello, World!!';