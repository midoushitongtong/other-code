<template>
  <div class="input-number-container">
    <Input :value="selfValue + ''" @change="handleValueChange" @blur="handleBlur">
      <Button slot="prefixContent" icon="minus" @click="handleValueMinus" />
      <Button slot="suffixContent" icon="plus" @click="handleValuePlus" />
    </Input>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Watch } from 'vue-property-decorator';
import Input from '../input/Input.vue';
import Button from '../button/Button.vue';

@Component({
  name: 'InputNumber',
  components: {
    Input,
    Button,
  },
})
export default class InputNumber extends Vue {
  @Model('change', {
    required: false,
    type: [Number, String],
    default: null,
  })
  private readonly value!: number | string;

  @Emit()
  private change(value: number | string): number | string {
    return value;
  }

  /**
   * 外部 value 发生变化, 更新内部 value
   */
  @Watch('value')
  private onValueChange(value: number | string): void {
    this.selfValue = value;
  }

  /**
   * 内部维护一个值(input 最终显示的也是内部的值)
   */
  private selfValue: number | string = this.value;

  /**
   * 处理 input 事件
   */
  private handleValueChange(value: string): void {
    this.selfValue = value;

    if (this.$listeners.change) {
      this.change(value);
    }
  }

  /**
   * 处理 blur 事件
   * 将表单内的值强制转为 number
   */
  private handleBlur(event: Event): void {
    const target = event.target as HTMLInputElement;

    // 将字符串转成 number
    let newValue: number | string = parseFloat(target.value);

    if (isNaN(newValue)) {
      newValue = '';
    }

    this.selfValue = newValue;

    this.change(newValue);
  }

  private handleValueMinus(): void {
    let newValue: number | string =
      typeof this.selfValue === 'string' ? parseFloat(this.selfValue) : this.selfValue;

    newValue -= 1;

    if (isNaN(newValue)) {
      newValue = '';
    }

    this.handleValueChange(newValue + '');
  }

  private handleValuePlus(): void {
    let newValue: number | string =
      typeof this.selfValue === 'string' ? parseFloat(this.selfValue) : this.selfValue;

    newValue += 1;

    if (isNaN(newValue)) {
      newValue = '';
    }

    this.handleValueChange(newValue + '');
  }
}
</script>

<style lang="scss">
@import './InputNumber.scss';
</style>
