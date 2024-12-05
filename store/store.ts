import { defineStore } from 'pinia';
import type { Answer, Question } from '~/types';
import { shuffleArray } from '~/util/helper';

export const useQuestionStore = defineStore("question", () => {
  const questions = ref<Question[]>([]);
  const selectedAnswer = ref<Answer | undefined>(undefined);
  const isAnswerRevealed = ref<boolean>(false);

  // const fetchQuestions = async () => {
  //   const questions = await fetch(`~/server/data/${name}`);
  //  if (questions.ok) {
  //     formattedQuestions.value = shuffleArray(await questions.json());
  //  }
  // }

  const getQuestionById = (id: string) => questions.value.find((question) => question.id === id);
  const answerQuestions = (questionId: string, answerId: string) => {
    const question = getQuestionById(questionId);
    const answer = question?.options?.find((option) => option.id === answerId);
    selectedAnswer.value = answer ?? undefined;
  }
  const checkAnswer = () => selectedAnswer.value?.isCorrect;
  const selectAnswer = (answer: Answer) => {
    console.log("answer: ", answer)
    selectedAnswer.value = answer
  };

  return {
    questions,
    selectedAnswer,
    answerQuestions,
    checkAnswer,
    selectAnswer
  }
})