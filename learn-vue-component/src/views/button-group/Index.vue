<template>
  <div>
    <section class="section">
      <h1>Button Group</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Case 1</h3>
    </section>
    <section class="section">
      <ButtonGroup>
        <Button>Single</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>Case 2</h3>
    </section>
    <section class="section">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>Case 3</h3>
    </section>
    <section class="section">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>Case 4</h3>
    </section>
    <section class="section">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </section>

    <section class="section">
      <h3>Case 5 Other Styles</h3>
    </section>
    <section class="section">
      <ButtonGroup>
        <Button type="primary">left</Button>
        <Button type="primary">center</Button>
        <Button type="primary">right</Button>
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
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h3 {
    margin: 0;
  }
}
</style>
