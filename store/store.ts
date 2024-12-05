import { defineStore } from 'pinia';
import type { Answer, Question } from '~/types';

export const useQuestionStore = defineStore("question", () => {
  const questions = ref<Question[]>([]);
  const selectedAnswer = ref<Answer | undefined>(undefined);
  const isAnswerRevealed = ref<boolean>(false);

  const getQuestionById = (id: string) => questions.value.find((question) => question.id === id);
  const answerQuestions = (questionId: string, answerId: string) => {
    const question = getQuestionById(questionId);
    const answer = question?.options?.find((option) => option.id === answerId);
    selectedAnswer.value = answer ?? undefined;
  }
  const checkAnswer = () => selectedAnswer.value?.isCorrect;


  return {
    questions,
    selectedAnswer,
    answerQuestions,
    checkAnswer
  }
})