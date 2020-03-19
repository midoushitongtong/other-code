<template>
  <div>
    <section class="section">
      <h3>case 1</h3>
    </section>

    <section class="section">
      <ButtonGroup>
        <Button type="primary">single</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>case 2</h3>
    </section>

    <section class="section">
      <ButtonGroup>
        <Button type="primary">left</Button>
        <Button type="primary">right</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>case 3</h3>
    </section>

    <section class="section">
      <ButtonGroup>
        <Button type="primary">left</Button>
        <Button type="primary">center</Button>
        <Button type="primary">right</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>case 4</h3>
    </section>

    <section class="section">
      <ButtonGroup>
        <Button>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
    </section>
  </div>
</template>

<script>
import Button from '../../components/button/Index';
import ButtonGroup from '../../components/button-group/Index';

export default {
  components: {
    Button,
    ButtonGroup
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
}
</style>
