<template>
  <div>
    <section class="section">
      <h3>Normal</h3>
    </section>

    <section class="section">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
    </section>

    <section class="section">
      <h3>Plain</h3>
    </section>

    <section class="section">
      <Button plain>Default</Button>
      <Button type="primary" plain>Primary</Button>
    </section>

    <section class="section">
      <h3>Round</h3>
    </section>

    <section class="section">
      <Button round>Default</Button>
      <Button type="primary" round>Primary</Button>
    </section>

    <section class="section">
      <h3>Circle</h3>
    </section>

    <section class="section">
      <Button circle>A</Button>
      <Button type="primary" circle>B</Button>
    </section>

    <section class="section">
      <h3>Text</h3>
    </section>

    <section class="section">
      <Button text>Hello</Button>
      <Button text>World</Button>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>

    <section class="section">
      <Button disabled>A</Button>
      <Button type="primary" disabled>B</Button>
    </section>

    <section class="section">
      <h3>Event Handle</h3>
    </section>

    <section class="section">
      <Button @click="handleClick">Click</Button>
    </section>

    <section class="section">
      <h3>Icon</h3>
    </section>

    <section class="section">
      <Button type="primary" icon="copy-document">Icon</Button>
      <Button type="primary" circle icon="loading"></Button>
      <Button type="primary">
        <span>Icon</span>
        <i class="a-icon-copy-document"
      /></Button>
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
