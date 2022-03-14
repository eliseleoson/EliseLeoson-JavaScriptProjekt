let form = document.querySelector("form");
console.log(form);
let resultBox = document.querySelector(".result-box");

form.addEventListener("submit", handleForm);

let points = 0;

function handleForm(event) {
    event.preventDefault();
    let answers = Array.from(document.querySelectorAll("input"));
    console.log(answers);
    answers.forEach((answer) => {
        if (answer.checked) {
            points += parseInt(answer.value);
        }
    })
    console.log(points);

     if (points === 3) {
        window.location.href = "./result1.html";
    } else if (points >= 666 && points <= 668) {
        window.location.href = "https://www.komvuxutbildningar.se/utbildning/komvuxutbildning-matematik";
    } else if (points >= 2000 && points <= 2003) {
        window.location.href = "./knug.html";
    } else if (points === 1 || points === 2 ) {
        window.location.href = "./result2.html";
    } else if (points === 0) {
        window.location.href = "./result3.html";
    } 
}
