<template>
  <div  class="text-center font-sans p4 border-solid color-red">
    <input v-model="value" />
    <Block1 />
    <Block2 />
  </div>
</template>

<script  setup>
import Block1 from '../components/Block1.vue';
import Block2 from '../components/Block2.vue';
defineOptions({
  name: 'Home',
});

import { ref } from 'vue';

const value = ref('');
console.log('Home loaded');
</script>
