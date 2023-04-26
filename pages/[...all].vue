<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700">
    <div class="text-4xl">
      <div class="i-[carbon/warning] inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="btn m-3 mt-8 text-sm" @click="router.back()">Back</button>
    </div>
  </main>
</template>
