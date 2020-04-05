<template>
  <main>
    <!-- <ButtonTest />
    <ButtonGroupTest /> -->
    <GridTest />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonTest from './views/button-test/ButtonTest.vue';
import ButtonGroupTest from './views/button-group-test/ButtonGroupTest.vue';
import GridTest from './views/grid-test/GridTest.vue';

@Component({
  name: 'App',
  components: {
    ButtonTest,
    ButtonGroupTest,
    GridTest,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  line-height: 1.5;
  main {
    display: flex;
    & > * {
      padding-right: 1rem;
      padding-left: 1rem;
      border-right: 1px solid #ccc;
    }
    padding-bottom: 1.75rem;
  }
}

* {
  box-sizing: border-box;
}
</style>
