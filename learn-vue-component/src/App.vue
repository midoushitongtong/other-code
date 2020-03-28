<template>
  <main>
    <ButtonTest />
    <ButtonGroupTest />
  </main>
</template>

<script>
import ButtonTest from './views/button-test/ButtonTest';
import ButtonGroupTest from './views/button-group-test/ButtonGroupTest';

export default {
  components: {
    ButtonTest,
    ButtonGroupTest,
  },
};
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
</style>
