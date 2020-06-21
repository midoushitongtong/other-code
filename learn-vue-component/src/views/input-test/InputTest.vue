<template>
  <div>
    <section class="section">
      <h1>Input</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <Input placeholder="input here" :value="value" @change="handleChangeValue" />
    </section>
    <section class="section">
      {{ value }}
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Input disabled placeholder="readonly here" :value="value2" />
    </section>
    <section class="section">
      <Input placeholder="input here" :value="value2" @change="handleChangeValue2" />
    </section>

    <section class="section">
      <h3>Allow Clear</h3>
    </section>
    <section class="section">
      <Input
        suffixIcon="search"
        allowClear
        placeholder="input here"
        :value="value3"
        @change="handleChangeValue3"
      />
    </section>
    <section class="section">
      {{ value3 }}
    </section>

    <section class="section">
      <h3>Icon</h3>
    </section>
    <section class="section">
      <Input prefixIcon="search" />
    </section>
    <section class="section">
      <Input>
        <i slot="prefixIcon" class="icon-search" />
      </Input>
    </section>
    <section class="section">
      <Input suffixIcon="date" />
    </section>
    <section class="section">
      <Input>
        <i slot="suffixIcon" class="icon-date" />
      </Input>
    </section>
    <section class="section">
      <Input prefixIcon="search" suffixIcon="date" />
    </section>
    <section class="section">
      <Input>
        <i slot="prefixIcon" class="icon-search" />
        <i slot="suffixIcon" class="icon-date" />
      </Input>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Input from '../../components/input/Input.vue';

@Component({
  name: 'CheckboxTest',
  components: {
    Input,
  },
})
export default class InputTest extends Vue {
  private value: string = '';

  private value2: string = '';

  private value3: string = 'nnn';

  private handleChangeValue(value: string): void {
    this.value = value;
  }

  private handleChangeValue2(value2: string): void {
    this.value2 = value2;
  }

  private handleChangeValue3(value3: string): void {
    this.value3 = value3;
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

  h3 {
    margin: 0;
  }

  ::v-deep input {
    width: 300px;
  }
}
</style>
