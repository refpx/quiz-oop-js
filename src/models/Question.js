export class Question {
  /**
   *
   * @param {string} question this is the question
   * @param {string{}} answers this is the array of answers
   * @param {string} multiple_correct_answers inicates if the question has multiple correct answers
   * @param {string{}} correct_answers this is the correct answers
   * @param {string[]} tags this is the tags
   * @param {string} category this is the category
   * @param {string} difficulty this is the difficulty
   */
  constructor(
    question,
    answers,
    multiple_correct_answers,
    correct_answers,
    tags,
    category,
    difficulty
  ) {
    this.question = question;
    this.answers = answers;
    this.multiple_correct_answers = multiple_correct_answers;
    this.correct_answers = correct_answers;
    this.tags = tags;
    this.category = category;
    this.difficulty = difficulty;
  }

  checkAnswer(correctAnswer) {
    return this.correct_answers[`${correctAnswer}_correct`] === "true";
  }
}
