const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"))
console.log(choices)

let currentQuestion = {}
let acceptingAnswers = true;
