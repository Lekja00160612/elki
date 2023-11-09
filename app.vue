<template>
  
  <div class="h-screen w-screen">
    <UHeader :links="links">
      <template #logo>
      
        <!-- <NuxtImg class="w-auto h-12" ></NuxtImg> -->
      </template>

      <template #right>
        <!-- <UDocsSearchButton label="Search..." /> -->

        <!-- <UColorModeButton /> -->

        <!-- <UButton to="https://github.com/nuxt/ui" target="_blank" icon="uil:github
" color="gray" variant="ghost" /> -->
      </template>

      <template #panel>
        <UNavigationTree :links="links" />
      </template>
    </UHeader>
    <div class="space-y-8 h-full">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">

const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]

</script>