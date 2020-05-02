<template>
  <div>
    <section class="section">
      <h1>Radio</h1>
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

    <section class="section">
      <h1>Radio Group</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <RadioGroup :value="value" @change="handleChangeValue">
        <Radio value="A">
          A
        </Radio>
        <Radio value="B">
          B
        </Radio>
      </RadioGroup>
    </section>
    <section class="section">
      <div>{{ value }}</div>
    </section>
    <section class="section">
      <Button @click="forceChangeValue('A')">Select A</Button>
      <Button @click="forceChangeValue('B')">Select B</Button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Radio from '../../components/radio/Radio.vue';
import RadioGroup from '../../components/radio-group/RadioGroup.vue';
import Button from '../../components/button/Button.vue';

@Component({
  name: 'RadioTest',
  components: {
    Radio,
    RadioGroup,
    Button,
  },
})
export default class RadioTest extends Vue {
  private disabled: boolean = false;

  private value: string = '';

  private toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  private handleChangeValue(value: string): void {
    this.value = value;
  }

  private forceChangeValue(value: string): void {
    this.value = value;
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
