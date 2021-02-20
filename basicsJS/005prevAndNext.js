function calc(){
    var numA = parseInt(document.querySelector("#value1").value);
    document.querySelector("#result").innerHTML = numA - 1;
    document.querySelector("#result1").innerHTML = numA + 1;
}