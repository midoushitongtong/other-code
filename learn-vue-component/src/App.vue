<template>
  <section id="app">
    <ButtonTest />
  </section>
</template>

<script>
import ButtonTest from './views/ButtonTest';

export default {
  name: 'App',
  components: {
    ButtonTest
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
  }
}
</style>
