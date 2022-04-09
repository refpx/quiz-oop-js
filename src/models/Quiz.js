// @ts-check
import { Question } from "./Question.js";

export class Quiz {
  /**
   *
   * @param {Question[]} questions this is the array of questions
   */
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }

  /**
   *
   * @returns {Question} the current question
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  /**
   *
   * @param {string} answer the user's answer to the question
   */
  guess(answer) {
    if (this.getQuestionIndex().checkAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

  /**
   *
   * @returns {boolean} true if there are still questions left
   */
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}
