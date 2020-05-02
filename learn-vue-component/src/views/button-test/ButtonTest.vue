<template>
  <div>
    <section class="section">
      <h1>Button</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Type</h3>
    </section>
    <section class="section">
      <Button>Primary</Button>
      <Button type="danger">Danger</Button>
    </section>

    <section class="section">
      <h3>Plain</h3>
    </section>
    <section class="section">
      <Button plain>Primary</Button>
      <Button type="danger" plain>Danger</Button>
    </section>

    <section class="section">
      <h3>Round</h3>
    </section>
    <section class="section">
      <Button round>Primary</Button>
      <Button type="danger" round>Danger</Button>
    </section>

    <section class="section">
      <h3>Circle</h3>
    </section>
    <section class="section">
      <Button circle>A</Button>
      <Button type="danger" circle>B</Button>
    </section>

    <section class="section">
      <h3>Text</h3>
    </section>
    <section class="section">
      <Button text>Primary</Button>
      <Button type="primary" text>Danger</Button>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Button disabled>Default</Button>
      <Button type="danger" disabled>Danger</Button>
    </section>

    <section class="section">
      <h3>Loading</h3>
    </section>
    <section class="section">
      <Button :loading="loading">Primary</Button>
      <Button @click="handleToggleLoading">Toggle</Button>
      <Button type="danger" :loading="loading">Danger</Button>
      <Button type="danger" @click="handleToggleLoading">Toggle</Button>
    </section>

    <section class="section">
      <h3>Size</h3>
    </section>
    <section class="section">
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="large">Large</Button>
      <Button type="danger" size="small">Small</Button>
      <Button type="danger">Default</Button>
      <Button type="danger" size="large">Large</Button>
    </section>

    <section class="section">
      <h3>Icon</h3>
    </section>
    <section class="section">
      <Button icon="copy-document">Copy</Button>
      <Button circle icon="close"></Button>
      <Button type="danger" icon="copy-document">Copy</Button>
      <Button type="danger" circle icon="close"></Button>
    </section>

    <section class="section">
      <h3>Event Handle</h3>
    </section>
    <section class="section">
      <Button @click="handleClick">Click</Button>
      <Button type="danger" @click="handleClick">Click</Button>
    </section>

    <section class="section">
      <h3>HTML Type</h3>
    </section>
    <section class="section">
      <Button>Button</Button>
      <Button htmlType="submit">Submit</Button>
      <Button htmlType="reset">Reset</Button>
      <Button type="danger">Button</Button>
      <Button type="danger" htmlType="submit">Submit</Button>
      <Button type="danger" htmlType="reset">Reset</Button>
    </section>

    <section class="section">
      <h3>Autofocus</h3>
    </section>
    <section class="section">
      <Button autofocus>Primary</Button>
    </section>

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
  name: 'ButtonTest',
  components: {
    Button,
    ButtonGroup,
  },
})
export default class ButtonTest extends Vue {
  private loading: boolean = true;

  private handleClick(event: MouseEvent): void {
    alert(event);
  }

  private handleToggleLoading(): void {
    this.loading = !this.loading;
  }
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
  button + button {
    margin-left: 10px;
  }
}
</style>
