let rf = document.getElementById("rf")
let whl= document.getElementById("whl")
let fl = document.getElementById("fl")


//with recursive function
function factorializeWithRecursion(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorializeWithRecursion(num - 1));
    }
    
}

rf.innerHTML = factorializeWithRecursion(5)

//do while loop
function factorializeWithWhile(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
whl.innerHTML = factorializeWithWhile(9);

//with for loop
function factorializeWithForLoop(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
fl.innerHTML = factorializeWithForLoop(6);