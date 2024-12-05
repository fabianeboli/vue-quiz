<script setup lang='ts'>
import { technologies } from '~/server/data/technologies';
const router = useRouter();

</script>

<template>
  <main class="h-screen flex flex-col items-center justify-center">
    <div class="h-1/5">
      <h1 class="text-3xl xl:text-5xl font-bold tracking-wider">Programming quizzes</h1>
      <p class="text-sm xl:text-lg mt-3">Test your knowledge in programming languages</p>
    </div>
    <ul class="flex flex-wrap gap-x-5 gap-y-3 mx-5">
      <li class="flex font-semibold gap-x-2 items-center cursor-pointer p-2 rounded-xl bg-sky-500/50 hover:bg-sky-600/70" v-for="technology in technologies"
        @click="router.push('/' + technology.name.toLowerCase().replaceAll('.', '').replaceAll('#', 'sharp') + '/1')" >
        <img :src="technology.icon" class="w-4 h-4" alt="" aria-label="Technology icon" />
        {{ technology.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped></style>