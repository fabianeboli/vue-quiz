<script setup lang='ts'>
import type { Question, Type } from '~/types';
import { useRoute } from 'vue-router';
import QuestionComponent from '~/components/Question.vue';
import { shuffleArray } from '~/util/helper';
import { useQuestionStore } from '~/store/store';
// onMounted(() => fetchQuestions());

const store = useQuestionStore();

const route = useRoute();
const router = useRouter();

const name = route.params.quizName;
const id = route.params.id;

const formattedQuestions = ref<Question[]>([]);
const questionIndex = ref<number>(0);



const getCurrentQuestion = formattedQuestions.value[Number(id) - 1];
console.log(getCurrentQuestion);

const questionEx: Question = {
  id: '1',
  title: 'Nuxt 3',
  description: 'Nuxt 3 is a new framework for Vue.js. It provides a new way to build your application, with a more modern and efficient approach.',
  type: 'radio',
  image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  options: [
    {
      id: '1',
      text: 'Yes',
      isCorrect: true
    },
    {
      id: '2',
      text: 'No',
      isCorrect: false
    }
  ]
}
</script>

<template>
  <main class="">
    <QuestionComponent :technology-name="String(name)" :question="questionEx"
      :questions-number="formattedQuestions.length" :question-index="questionIndex" />
    <div class="flex justify-center gap-x-10">
      <button :disabled="!store.selectedAnswer || questionIndex <= 1"
        class="rounded-xl px-5 py-2 bg-sky-400/90 shadow-md hover:drop-shadow-md" :class="{
          'bg-sky-900/90 cursor-not-allowed': !store.selectedAnswer || questionIndex <= 1,
          'hover:bg-sky-500 cursor-pointer': store.selectedAnswer
        }" @click="router.push('/' + name + '/' + (Number(id) - 1))">Previous</button>
      <button :disabled="!store.selectedAnswer"
        class="rounded-xl px-5 py-2 bg-sky-400/90 hover:bg-sky-500 shadow-md hover:drop-shadow-md cursor-pointer" :class="{
          'bg-sky-900/90': !store.selectedAnswer,
          'hidden': Number(id) === formattedQuestions.length,
          'hover:bg-sky-500 cursor-pointer': store.selectedAnswer
        }" @click="router.push('/' + name + '/' + (Number(id) + 1))">Next</button>
    </div>
  </main>
</template>

<style scoped></style>