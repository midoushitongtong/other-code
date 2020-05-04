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
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Radio value="A" :disabled="disabled">A</Radio>
      <Radio value="B" checked :disabled="disabled">B</Radio>
    </section>
    <section class="section">
      <Button @click="toggleDisabled">Toggle Disabled</Button>
    </section>

    <section class="section">
      <h1>Radio Group</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <RadioGroup v-model="value" @change="handleChangeValue">
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
      </RadioGroup>
    </section>
    <section class="section">
      <RadioGroup :disabled="disabled2" v-model="value" @change="handleChangeValue">
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
      </RadioGroup>
    </section>
    <section class="section">
      <Button @click="toggleDisabled2">Toggle Disabled</Button>
    </section>

    <section class="section">
      <h1>Radio Button</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <RadioGroup v-model="value2" @change="handleChangeValue2">
        <RadioButton value="A">A</RadioButton>
        <RadioButton value="B">B</RadioButton>
        <RadioButton value="C">C</RadioButton>
        <RadioButton value="D">D</RadioButton>
      </RadioGroup>
    </section>
    <section class="section">
      <RadioGroup :disabled="disabled3" v-model="value2" @change="handleChangeValue2">
        <RadioButton value="A">A</RadioButton>
        <RadioButton value="B">B</RadioButton>
        <RadioButton value="C">C</RadioButton>
        <RadioButton value="D">D</RadioButton>
      </RadioGroup>
    </section>
    <section class="section">
      <Button @click="toggleDisabled3">Toggle Disabled</Button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Radio from '../../components/radio/Radio.vue';
import RadioButton from '../../components/radio-button/RadioButton.vue';
import RadioGroup from '../../components/radio-group/RadioGroup.vue';
import Button from '../../components/button/Button.vue';

@Component({
  name: 'RadioTest',
  components: {
    Radio,
    RadioButton,
    RadioGroup,
    Button,
  },
})
export default class RadioTest extends Vue {
  private disabled: boolean = true;

  private disabled2: boolean = true;

  private disabled3: boolean = true;

  private value: string = '';

  private value2: string = '';

  private toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  private toggleDisabled2(): void {
    this.disabled2 = !this.disabled2;
  }

  private toggleDisabled3(): void {
    this.disabled3 = !this.disabled3;
  }

  private handleChangeValue(value: string): void {
    console.log(value);
  }

  private handleChangeValue2(value2: string): void {
    console.log(value2);
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
