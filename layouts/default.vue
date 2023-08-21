<script setup>
const navigation = [
  { name: 'Home', href: '/', icon: 'i-[carbon/home]', count: '5', current: true },
  { name: 'Second', href: '/second', icon: 'i-[carbon/number2]', current: false },
  { name: 'FormKit', href: '/formkit', icon: 'i-[carbon/form]', current: false },
]
</script>

<template>
  <div class="flex justify-center p-2 py-10">
    <div class="flex w-full flex-col md:max-w-[700px] md:flex-row">
      <nav class="mb-6 flex w-full flex-col md:w-48 md:p-5" aria-label="Sidebar">
        <ul role="list" class="space-y-1">
          <li v-for="item in navigation" :key="item.name">
            <NuxtLink
              :to="item.href"
              class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 nla:bg-gray-50 nla:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:nla:bg-gray-800 dark:nla:text-gray-200"
            >
              <span
                class="h-6 w-6 shrink-0 nla:text-indigo-600 nla:group-hover:text-indigo-600"
                :class="item.icon"
                aria-hidden="true"
              ></span>
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <main class="max-w-md lg:max-w-fit lg:w-[500px] lg:px-10 lg:py-20">
        <slot />
        <Footer />
        <div class="mx-auto mt-5 text-center text-sm opacity-25">[Default Layout]</div>
      </main>
    </div>
  </div>
</template>
