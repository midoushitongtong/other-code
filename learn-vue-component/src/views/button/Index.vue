<template>
  <div>
    <section class="section">
      <h3>normal</h3>
    </section>

    <section class="section">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
    </section>

    <section class="section">
      <h3>plain</h3>
    </section>

    <section class="section">
      <Button plain>Default</Button>
      <Button type="primary" plain>Primary</Button>
    </section>

    <section class="section">
      <h3>round</h3>
    </section>

    <section class="section">
      <Button round>Default</Button>
      <Button type="primary" round>Primary</Button>
    </section>

    <section class="section">
      <h3>circle</h3>
    </section>

    <section class="section">
      <Button circle>A</Button>
      <Button type="primary" circle>B</Button>
    </section>

    <section class="section">
      <h3>text</h3>
    </section>

    <section class="section">
      <Button text>text</Button>
      <Button text>text</Button>
    </section>

    <section class="section">
      <h3>disabled</h3>
    </section>

    <section class="section">
      <Button disabled>A</Button>
      <Button type="primary" disabled>B</Button>
    </section>

    <section class="section">
      <h3>click</h3>
    </section>

    <section class="section">
      <Button @click="handleClick">Click</Button>
    </section>
  </div>
</template>

<script>
import Button from '../../components/button/Index';

export default {
  components: {
    Button
  },
  methods: {
    handleClick(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 10px;
  }
}
</style>
