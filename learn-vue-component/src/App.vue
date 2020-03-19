<template>
  <main>
    <ButtonTest />
    <ButtonGroup />
  </main>
</template>

<script>
import ButtonTest from './views/button/Index';
import ButtonGroup from './views/button-group/Index';

export default {
  components: {
    ButtonTest,
    ButtonGroup
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  font-size: 1rem;
  line-height: 1.5;
  main {
    display: flex;
    & > * {
      padding-right: 1rem;
      padding-left: 1rem;
      border-right: 1px solid #ccc;
    }
  }
}
</style>
