import { Question } from "../models/Question.js";

const API_KEY = "ENTER YOUR API";
const URI = "https://quizapi.io";
const URI_VERSION = "/api/v1";

async function requestData(category, limit) {
  const response = await fetch(
    `${URI}${URI_VERSION}/questions?category=${category}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    }
  );
  return await response.json();
}

export async function getData(category, limit) {
  try {
    if (limit == "") limit = 20;
    const dataFormated = [];
    var data = [];

    do {
      data = await requestData(
        category,
        parseInt(limit) - parseInt(dataFormated.length)
      );
      for (const item of data) {
        if (item["multiple_correct_answers"] === "false") {
          dataFormated.push(item);
        }
      }
    } while (dataFormated.length != limit);

    const questions = dataFormated.map(
      (question) =>
        new Question(
          question.question,
          question.answers,
          question.multiple_correct_answers,
          question.correct_answers,
          question.tags,
          question.category,
          question.difficulty
        )
    );

    return questions;
  } catch (error) {
    console.log(error);
  }
}
