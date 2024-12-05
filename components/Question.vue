<script setup lang='ts'>
import type { Question } from "~/types";
import {v4 as uuid} from 'uuid';

const selectedAnswer = ref<string>("");
const { question, questionsNumber, questionIndex } = defineProps<{
  technologyName: string;
  question: Question;
  questionsNumber: number;
  questionIndex: number;
}>();

question.options?.forEach((option) => {
  option.id = uuid();
})

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <h1> Questions in {{ technologyName }} </h1>
    <span>{{ questionIndex + 1 }}/{{ questionsNumber }}</span>
  </section>
  <h2 class="mb-2 text-2xl">Question: {{ question.title }}</h2>
  <h2 class="text-xl"> {{ question.description }} </h2>

  <ul>
    <li v-for="{ id, text, isCorrect} in question.options" :key="id">
      <input :type="question.type" :id="String(id)" :value="id" v-model="selectedAnswer" />
      <label @click="selectedAnswer = id" :for="String(id)">{{ text }}</label>
    </li>
  </ul>
  <button @click="$emit('answer')">Answer</button>
</template>

<style scoped></style>