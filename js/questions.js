// questions.js

import { questions } from "./data.js";

const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionsEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0; // 현재 질문의 번호가 몇 번인지 표시하는 변수
let mbti = "";

function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionsEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
    // currentNumber가 9가 되면 showResultPage()를 실행하고 여기서 종료한다.
  }
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  // mbti = '' + 'i' -> 'i' -> 'i' + 's' -> 'is' -> 'is' + 'f' -> 'isf' -> 'isf' + 'p' -> 'isfp'
  currentNumber = currentNumber + 1;
  renderQuestion();
}

function showResultPage() {
  location.href = "/results.html?mbti=" + mbti; // 쿼리스트링
  // 주소?전달하고 싶은 데이터
}

choice1El.addEventListener("click", function () {
  nextQuestion(0);
});

choice2El.addEventListener("click", function () {
  nextQuestion(1);
});

renderQuestion();
