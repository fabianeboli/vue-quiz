<script setup lang='ts'>
const router = useRouter();

</script>

<template>
  <main class="h-screen flex flex-col items-center justify-center">
    <div>
      <h1 class="text-3xl xl:text-5xl font-bold tracking-wider mb-8">Page doesn't exist</h1>
      <button class="font-bold rounded-xl py-2 px-5 bg-red-600 hover:bg-red-700 shadow-md hover:drop-shadow-md self-start" @click="router.back()">Return</button>

    </div>
  </main>
</template>

<style scoped></style>