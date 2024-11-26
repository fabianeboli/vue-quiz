<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { Question, Type } from '~/types';
import { questions } from "~/server/data/technologies"
import { shuffleArray } from '~/util/helper';

const route = useRoute();
const router = useRouter();

const name = route.params.quizName;
const id = route.params.id;

const formattedQuestions = ref<Question[]>([]);
const questionsNumber = formattedQuestions.value.length - 1;
const questionIndex = ref<number>(0);
const getCurrentQuestion = formattedQuestions.value[questionIndex.value];

const selectedAnswer = ref<number[] | undefined>(undefined);


const fetchQuestions = async () => {
  const questions = await fetch(`~/server/data/${name}`);
  if (questions.ok) {
    formattedQuestions.value = shuffleArray(await questions.json());
  }
}

const answer = () => {
  if (selectedAnswer === undefined) {
    console.log("No answer selected");
    return;
  }
  // TODO: store answer in pinia
  // TODO: check if is a correct answer
  questionIndex.value++;
}

onMounted(() => fetchQuestions());

</script>

<template>
  <main>
    <section class="flex flex-col gap-y-2">
      <h1> Questions in {{ name }} </h1>
      <span> {{ questionIndex + 1 }}/{{ questionsNumber }} </span>
    </section>
    <h2 class="mb-2 text-2xl">Question: {{ getCurrentQuestion.title }}</h2>
    <h2 class="text-xl"> {{ getCurrentQuestion.question }} </h2>

    {{ getCurrentQuestion.type }}

    <ul>

    </ul>

    <section>
      <button class="rounded-xl p-2 bg-slate-400/60 hover:bg-slate-500/50" @click="router.back()">Back</button>
      <button class="rounded-xl p-2 bg-sky-400/90 hover:bg-sky-500 shadow-md hover:drop-shadow-md"
        @click="answer()">Answer</button>
    </section>

  </main>
</template>

<style scoped></style>