<template>
  <div>
    <section class="section">
      <h1>Layout</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <Radio value="A">
        A
      </Radio>
      <Radio value="B">
        B
      </Radio>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Radio value="A" :disabled="disabled">
        A
      </Radio>
      <Radio value="B" checked :disabled="disabled">
        B
      </Radio>
    </section>
    <section class="section">
      <Button @click="toggleDisabled">Toggle</Button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Radio from '../../components/radio/Radio.vue';
import Button from '../../components/button/Button.vue';

@Component({
  name: 'RadioTest',
  components: {
    Radio,
    Button,
  },
})
export default class RadioTest extends Vue {
  private checked: boolean = false;

  private disabled: boolean = false;

  private toggleChecked(): void {
    this.checked = !this.checked;
  }

  private toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
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
