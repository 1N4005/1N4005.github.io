async function fetchAge() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("result"); 
    let response = await fetch('https://api.agify.io/?name='+input);
    let js = await response.json();
    console.table(js);
    output.innerHTML = "<p class='text'>your age is: " + js.age + "</p>";
}