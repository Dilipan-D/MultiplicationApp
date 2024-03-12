const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const  formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const wrongEl = document.getElementById("wrong");

let score = JSON.parse(localStorage.getItem("score"));
let wrong = JSON.parse(localStorage.getItem("wrong"));

if(!score){
    score = 0;
}

if(!wrong){
    wrong = 0;
}


scoreEl.innerText = `Score: ${score}`;
wrongEl.innerText = `Wrong: ${wrong}`;

questionEl.innerText = `What is ${number1} multiply by ${number2} ?`;

const correctAns = number1 * number2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if(userAns === correctAns) {
        score++;
        updateLocalStorage ()
    }else{
        wrong++;
        updateLocalStorage ()
    }
} );

function updateLocalStorage () {
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("wrong", JSON.stringify(wrong))
}