export class UI {
  constructor() {}

  /**
   *
   * @param {string} question Question to render
   */
  showQuestion(question) {
    const questionTitle = document.getElementById("questionTitle");
    questionTitle.innerText = question;
  }

  /**
   *
   * @param {string[]} answers Array of answers to render
   */
  showAnswers(answers, typeAnswers, callback) {
    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = "";

    for (let answer in answers) {
      if (answers[answer]) {
        const answerElement = document.createElement("button");
        answerElement.className = "answer";
        answerElement.innerText = answers[answer];
        answerElement.addEventListener("click", () => callback(answer));
        answersContainer.appendChild(answerElement);
      }
    }

    // if (typeAnswers === "true") {
    //   for (let answer in answers) {
    //     if (answers[answer]) {
    //       const answerElement = `
    //         <div class="answer-checkbox">
    //           <input type="checkbox" id="${answers[answer]}" value="${answers[answer]}">
    //           <label for="${answers[answer]}">${answers[answer]}</label>
    //         </div>
    //       `;
    //       answersContainer.innerHTML += answerElement;
    //     }
    //   }
    // } else {
    //   for (let answer in answers) {
    //     if (answers[answer]) {
    //       const answerElement = document.createElement("button");
    //       answerElement.className = "answer";
    //       answerElement.innerText = answers[answer];
    //       answerElement.addEventListener("click", () => callback(answer));
    //       answersContainer.appendChild(answerElement);
    //     }
    //   }
    // }
  }

  showProgress(currentQuestion, totalQuestions) {
    const progress = `
      Question ${currentQuestion} of ${totalQuestions}
    `;
    document.getElementById("progress").innerText = progress;
  }

  /**
   *
   * @param {number} score Score to render
   */
  showScore(score) {
    const scoreContainer = `
      <h1>Result</h1>
      <h2>Your score: ${score}</h2>
      <button class="answer" id="restart">Restart</button>
    `;
    document.getElementById("quizContainer").innerHTML = scoreContainer;

    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
      location.reload();
    });
  }
}
