function calculate() {
    let output = document.getElementById("result");
    let number = document.getElementById("number").value * 1;
    let pi = 0;
    if (number < 2) {
        output.innerHTML += "<p>please input a larger number.</p>"
    }
    for(let i=1; i<number; i++) {
        console.log(i);
        pi += 1/i**2;
    }
    pi *= 6;
    pi **= 0.5;
    console.log(pi);
    output.innerHTML += "<p>" + pi + "</p>";
}