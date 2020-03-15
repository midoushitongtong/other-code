<template>
  <div>
    <section>
      <h3>normal</h3>
    </section>
    <section>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
    </section>

    <section>
      <h3>plain</h3>
    </section>
    <section>
      <Button plain>默认按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
    </section>

    <section>
      <h3>round</h3>
    </section>
    <section>
      <Button round>默认按钮</Button>
      <Button type="primary" round>主要按钮</Button>
    </section>

    <section>
      <h3>circle</h3>
    </section>
    <section>
      <Button circle>A</Button>
      <Button type="primary" circle>B</Button>
    </section>

    <section>
      <h3>text</h3>
    </section>
    <section>
      <Button text>text</Button>
    </section>

    <section>
      <h3>disabled</h3>
    </section>
    <section>
      <Button disabled>A</Button>
      <Button type="primary" disabled>B</Button>
    </section>

    <section>
      <h3>click</h3>
    </section>
    <section>
      <Button @click="handleClick">A</Button>
    </section>
  </div>
</template>

<script>
import Button from '../components/Button';

export default {
  name: 'App',
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

<style lang="scss">
section {
  display: flex;
  justify-content: center;
}
</style>
