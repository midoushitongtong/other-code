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
        <Button type="danger">left</Button>
        <Button type="danger">center</Button>
        <Button type="danger">right</Button>
      </ButtonGroup>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button/Button.vue';
import ButtonGroup from '../../components/button-group/ButtonGroup.vue';

@Component({
  name: 'ButtonGroupTest',
  components: {
    Button,
    ButtonGroup,
  },
})
export default class ButtonGroupTest extends Vue {
  private handleClick = (event: MouseEvent): void => {
    console.log(event);
  };
}
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
