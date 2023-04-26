<script setup lang="ts">
const name = ref('')

const router = useRouter()
function go() {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="off"
      class="mt-5 w-[250px] rounded border border-gray-200 bg-transparent px-4 py-2 text-center outline-none active:outline-none dark:border-gray-700"
      @keydown.enter="go"
    />
    <div>
      <button class="btn m-3 text-sm" :disabled="!name" @click="go">GO</button>
    </div>
  </div>
</template>
