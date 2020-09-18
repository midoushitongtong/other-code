<template>
  <div @click="increment(1)">{{ count }}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    const increment = (number) => {
      state.count += number;
    };

    return {
      ...toRefs(state),
      increment,
    };
  },
};
</script>

<style></style>
