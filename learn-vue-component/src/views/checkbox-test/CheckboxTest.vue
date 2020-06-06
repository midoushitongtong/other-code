<template>
  <div>
    <section class="section">
      <h1>Checkbox</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <Checkbox value="A" @change="handleChangeCheckedStatus">A</Checkbox>
      <Checkbox value="B" @change="handleChangeCheckedStatus">B</Checkbox>
    </section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Checkbox value="A" :disabled="disabled" @change="handleChangeCheckedStatus">A</Checkbox>
      <Checkbox value="B" :disabled="disabled" @change="handleChangeCheckedStatus">B</Checkbox>
    </section>
    <section class="section">
      <Button @click="toggleDisabled">Toggle Disabled</Button>
    </section>

    <section class="section">
      <h1>Checkbox Group</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <CheckboxGroup v-model="value" @change="handleChangeValue">
        <Checkbox value="A" @change="handleChangeCheckedStatus">A</Checkbox>
        <Checkbox value="B" @change="handleChangeCheckedStatus">B</Checkbox>
        <Checkbox value="C" @change="handleChangeCheckedStatus">C</Checkbox>
      </CheckboxGroup>
    </section>
    <section class="section">
      <CheckboxGroup :disabled="disabled2" v-model="value" @change="handleChangeValue">
        <Checkbox value="A" @change="handleChangeCheckedStatus">A</Checkbox>
        <Checkbox value="B" @change="handleChangeCheckedStatus">B</Checkbox>
        <Checkbox value="C" @change="handleChangeCheckedStatus">C</Checkbox>
      </CheckboxGroup>
    </section>
    <section class="section">
      <Button @click="toggleDisabled2">Toggle Disabled</Button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Checkbox from '../../components/checkbox/Checkbox.vue';
import CheckboxGroup from '../../components/checkbox-group/CheckboxGroup.vue';
import Button from '../../components/button/Button.vue';

@Component({
  name: 'CheckboxTest',
  components: {
    Checkbox,
    CheckboxGroup,
    Button,
  },
})
export default class CheckboxTest extends Vue {
  private disabled: boolean = true;

  private disabled2: boolean = true;

  private value: string = '';

  private value2: string = '';

  private toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  private toggleDisabled2(): void {
    this.disabled2 = !this.disabled2;
  }

  private handleChangeCheckedStatus(qq): void {
    console.log(qq);
  }

  private handleChangeValue(value: string): void {
    console.log(value);
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
