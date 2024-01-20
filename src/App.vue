<template>
  <div class="bg-red">title</div>
  <div>
    <router-link class="mr-5" to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive :include="['Home']">
      <component :is="Component" :key="$route.fullPath" />
    </keep-alive>
  </router-view>
</template>