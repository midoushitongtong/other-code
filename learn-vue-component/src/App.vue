<template>
  <main>
    <button @click="() => (testComponentName = 'ButtonTest')">ButtonTest</button>
    <button @click="() => (testComponentName = 'ButtonGroupTest')">ButtonGroupTest</button>
    <button @click="() => (testComponentName = 'GridTest')">GridTest</button>
    <button @click="() => (testComponentName = 'LayoutTest')">LayoutTest</button>

    <ButtonTest v-if="testComponentName === 'ButtonTest'" />
    <ButtonGroupTest v-if="testComponentName === 'ButtonGroupTest'" />
    <GridTest v-if="testComponentName === 'GridTest'" />
    <LayoutTest v-if="testComponentName === 'LayoutTest'" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonTest from './views/button-test/ButtonTest.vue';
import ButtonGroupTest from './views/button-group-test/ButtonGroupTest.vue';
import GridTest from './views/grid-test/GridTest.vue';
import LayoutTest from './views/layout-test/LayoutTest.vue';

@Component({
  name: 'App',
  components: {
    ButtonTest,
    ButtonGroupTest,
    GridTest,
    LayoutTest,
  },
})
export default class App extends Vue {
  private testComponentName: string = 'LayoutTest';
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  line-height: 1.5;
  main {
    button + button {
      margin-left: 1rem;
    }
  }
}

* {
  box-sizing: border-box;
}
</style>
