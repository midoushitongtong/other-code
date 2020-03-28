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
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
    </section>

    <section class="section">
      <h3>HTML Type</h3>
    </section>
    <section class="section">
      <Button type="primary">button</Button>
      <Button type="primary" htmlType="submit">submit</Button>

      <Button type="primary" htmlType="reset">reset</Button>
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
      <Button text>Text Button A</Button>
      <Button text>Text Button B</Button>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Button disabled>Default</Button>
      <Button type="primary" disabled>Primary</Button>
    </section>

    <section class="section">
      <h3>Loading</h3>
    </section>
    <section class="section">
      <Button type="primary" :loading="loading">Primary</Button>
      <Button type="primary" @click="handleToggleLoading">Toggle</Button>
    </section>

    <section class="section">
      <h3>Size</h3>
    </section>
    <section class="section">
      <Button type="primary" size="small">Small</Button>
      <Button type="primary">Default</Button>
      <Button type="primary" size="large">Large</Button>
    </section>
    <section class="section">
      <Button type="primary" size="small" circle>
        <i class="a-icon-copy-document" />
      </Button>
      <Button type="primary" circle>
        <i class="a-icon-copy-document" />
      </Button>
      <Button type="primary" size="large" circle>
        <i class="a-icon-copy-document" />
      </Button>
    </section>

    <section class="section">
      <h3>Event Handle</h3>
    </section>
    <section class="section">
      <Button type="primary" @click="handleClick">Click</Button>
    </section>

    <section class="section">
      <h3>Icon</h3>
    </section>
    <section class="section">
      <Button type="primary" icon="copy-document">Copy</Button>
      <Button type="primary" circle icon="close"></Button>
    </section>

    <section class="section">
      <h3>Autofocus</h3>
    </section>
    <section class="section">
      <Button type="primary" autofocus>button</Button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class ButtonTest extends Vue {
  private loading: boolean = true;

  private handleClick(event: MouseEvent) {
    alert(event);
  }

  private handleToggleLoading() {
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
