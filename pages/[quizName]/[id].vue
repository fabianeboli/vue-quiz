<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { Question, Type } from '~/types';


import { useRoute } from 'vue-router';
import { Question } from '~/types';
import QuestionComponent from '~/components/QuestionComponent.vue';
import { shuffleArray } from '~/util/helper';

const route = useRoute();
const router = useRouter();

const name = route.params.quizName;
const id = route.params.id;

const formattedQuestions = ref<Question[]>([]);
const questionIndex = ref<number>(0);

const getCurrentQuestion = computed(() => formattedQuestions.value[questionIndex.value]);

const selectedAnswer = ref<number[] | undefined>(undefined);

const answer = () => {
  if (selectedAnswer === undefined) {
    console.log("No answer selected");
    return;
  }
  // TODO: store answer in pinia
  // TODO: check if is a correct answer
  questionIndex.value++;
}

const fetchQuestions = async () => {
  const questions = await fetch(`~/server/data/${name}`);
  if (questions.ok) {
    formattedQuestions.value = shuffleArray(await questions.json());
  }
}



onMounted(() => fetchQuestions());

</script>

<template>

  <main>
    <QuestionComponent :question="getCurrentQuestion" :selected-answer="selectedAnswer" @answer="answer" />
    <button class="rounded-xl p-2 bg-sky-400/90 hover:bg-sky-500 shadow-md hover:drop-shadow-md"
      @click="answer()">Answer</button>
  </main>
</template>

<style scoped></style>