function add(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);

    var result = numA + numB;

    document.querySelector("#result").innerHTML = result;
}

function min(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);

    var result = numA - numB;

    document.querySelector("#result").innerHTML = result;
}

function div(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);

    var result = numA / numB;

    document.querySelector("#result").innerHTML = result;
}

function mul(){
    var numA = parseInt(document.querySelector("#value1").value);
    var numB = parseInt(document.querySelector("#value2").value);

    var result = numA * numB;

    document.querySelector("#result").innerHTML = result;
}