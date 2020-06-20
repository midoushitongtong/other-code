<template>
  <main>
    <button @click="() => (testComponentName = 'ButtonTest')">ButtonTest</button>
    <button @click="() => (testComponentName = 'GridTest')">GridTest</button>
    <button @click="() => (testComponentName = 'LayoutTest')">LayoutTest</button>
    <button @click="() => (testComponentName = 'RadioTest')">RadioTest</button>
    <button @click="() => (testComponentName = 'CheckboxTest')">CheckboxTest</button>
    <button @click="() => (testComponentName = 'InputTest')">InputTest</button>

    <ButtonTest v-if="testComponentName === 'ButtonTest'" />
    <ButtonGroupTest v-if="testComponentName === 'ButtonGroupTest'" />
    <GridTest v-if="testComponentName === 'GridTest'" />
    <LayoutTest v-if="testComponentName === 'LayoutTest'" />
    <RadioTest v-if="testComponentName === 'RadioTest'" />
    <CheckboxTest v-if="testComponentName === 'CheckboxTest'" />
    <InputTest v-if="testComponentName === 'InputTest'" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonTest from './views/button-test/ButtonTest.vue';
import GridTest from './views/grid-test/GridTest.vue';
import LayoutTest from './views/layout-test/LayoutTest.vue';
import RadioTest from './views/radio-test/RadioTest.vue';
import CheckboxTest from './views/checkbox-test/CheckboxTest.vue';
import InputTest from './views/input-test/InputTest.vue';

@Component({
  name: 'App',
  components: {
    ButtonTest,
    GridTest,
    LayoutTest,
    RadioTest,
    CheckboxTest,
    InputTest,
  },
})
export default class App extends Vue {
  private testComponentName: string = 'InputTest';
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
    padding-bottom: 5rem;
  }
}

* {
  box-sizing: border-box;
}
</style>
