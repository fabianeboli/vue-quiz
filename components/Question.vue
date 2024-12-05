<script setup lang='ts'>
import type { Question } from "~/types";
import { useQuestionStore } from "~/store/store";

const store = useQuestionStore();
const isAnswerRevealed = ref<boolean>(false);
const { question, questionsNumber, questionIndex } = defineProps<{
  technologyName: string;
  question: Question;
  questionsNumber: number;
  questionIndex: number;
}>();

</script>

<template>
  <h1 class="text-3xl xl:text-5xl font-bold tracking-wider mb-8 xl:mb-20"> Quiz: {{ technologyName }} </h1>
  <div class="container flex flex-col items-center justify-center max-w-[66%] mx-auto gap-y-8">
    <section class="flex flex-col justify-center gap-y-2 ">
      <span class="text-white/40 xl:text-lg">{{ questionIndex + 1 }}/{{ questionsNumber }}</span>
    </section>
    <h2 class="mb-2 text-3xl">Question: {{ question.title }}</h2>
    <h2 class="text-2xl"> {{ question.description }} </h2>
    <ul class="flex flex-col gap-y-5 my-5 self-baseline w-full ml-5">
      <li class="cursor-pointer bg-sky-800/40 hover:bg-sky-800/80 rounded-xl p-5" :class="{
        'bg-emerald-800/80': isAnswerRevealed && isCorrect,
        'bg-red-800/80': isAnswerRevealed && !isCorrect,
        'bg-sky-900/80': store.selectedAnswer?.id === id
      }"
        v-for="{ id, text, isCorrect } in question.options" :key="id">
        <label :for="String(id)">{{ id }}: </label>
        <button @click="store.answerQuestions(question.id, id)" :value="id"> {{ text }} </button>
      </li>
    </ul>
    <button
      class="font-bold rounded-xl py-2 px-5 bg-sky-400/90 hover:bg-sky-500 shadow-md hover:drop-shadow-md my-10 xl:my-20"
      @click="store.checkAnswer()">Answer</button>
  </div>
</template>

<style scoped></style>