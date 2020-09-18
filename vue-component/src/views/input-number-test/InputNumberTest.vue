<template>
  <div>
    <section class="section">
      <h1>Input Number</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <InputNumber placeholder="input here" :value="value" @change="handleValueChange" />
    </section>
    <section class="section">{{ value }}</section>
    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <InputNumber disabled :value="value" />
    </section>

    <section class="section">
      <h3>Min Max</h3>
    </section>
    <section class="section">
      <InputNumber :min="1" :max="5" placeholder="input here" v-model="value2" />
    </section>
    <section class="section">{{ value2 }}</section>

    <section class="section">
      <h3>Step</h3>
    </section>
    <section class="section">
      <InputNumber :step="0.5" placeholder="input here" v-model="value3" />
    </section>
    <section class="section">{{ value3 }}</section>

    <section class="section">
      <h3>Precision</h3>
    </section>
    <section class="section">
      <InputNumber :step="0.5" :precision="2" placeholder="input here" v-model="value4" />
    </section>
    <section class="section">{{ value4 }}</section>

    <section class="section">
      <h3>Layout</h3>
    </section>
    <section class="section">
      <InputNumber controlPosition="right" placeholder="input here" v-model="value5" />
    </section>
    <section class="section">{{ value5 }}</section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InputNumber from '../../components/input-number/InputNumber.vue';

@Component({
  name: 'InputNumberTest',
  components: {
    InputNumber,
  },
})
export default class InputTest extends Vue {
  private value: number = 1;

  private value2: number = 1;

  private value3: number = 1;

  private value4: number = 1;

  private value5: number = 1;

  private handleValueChange(value: number): void {
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
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  word-break: break-word;
  white-space: pre-line;

  h3 {
    margin: 0;
  }

  ::v-deep .input-number-container {
    width: 300px;
  }
}
</style>
