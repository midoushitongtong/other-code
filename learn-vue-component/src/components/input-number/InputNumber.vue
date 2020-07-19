<template>
  <div :class="['input-number-container', controlPosition === 'right' && 'control-right']">
    <Input :disabled="disabled" :value="selfValue + ''" @change="handleValueChange" @blur="handleBlur">
      <Button
        :disabled="!isEnableMinusButton"
        slot="prefixContent"
        icon="arrow-up"
        @click="handleValueMinus"
      />
      <Button
        :disabled="!isEnablePlusButton"
        slot="suffixContent"
        icon="arrow-down"
        @click="handleValuePlus"
      />
    </Input>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Watch, Prop } from 'vue-property-decorator';
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

  @Prop({
    required: false,
    type: Number,
    default: 1,
  })
  private readonly step!: number;

  @Prop({
    required: false,
    type: Number,
    default: null,
  })
  private readonly min!: number;

  @Prop({
    required: false,
    type: Number,
    default: null,
  })
  private readonly max!: number;

  @Prop({
    required: false,
    type: Number,
    default: null,
  })
  private readonly precision!: number;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  private readonly disabled!: boolean;

  @Prop({
    required: false,
    type: String,
    default: null,
    validator(value) {
      return ['right'].includes(value);
    },
  })
  private readonly controlPosition!: string;

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

  private get isEnableMinusButton(): boolean {
    if (this.disabled) {
      return false;
    }

    if (this.min !== null && this.selfValue) {
      return this.selfValue > this.min;
    }

    return true;
  }

  private get isEnablePlusButton(): boolean {
    if (this.disabled) {
      return false;
    }

    if (this.max !== null && this.selfValue) {
      return this.selfValue < this.max;
    }

    return true;
  }

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
    } else {
      if (this.max !== null && newValue > this.max) {
        newValue = this.max;
      }

      if (this.min !== null && newValue < this.min) {
        newValue = this.min;
      }

      if (this.precision !== null) {
        newValue = newValue.toFixed(this.precision);
      }
    }

    this.handleValueChange(newValue + '');
  }

  private handleValueMinus(): void {
    let newValue: number | string =
      typeof this.selfValue === 'string' ? parseFloat(this.selfValue) : this.selfValue;

    newValue -= this.step;

    if (isNaN(newValue)) {
      newValue = 1;
    } else {
      if (this.min !== null && newValue < this.min) {
        newValue = this.min;
      }

      if (this.precision !== null) {
        newValue = newValue.toFixed(this.precision);
      }
    }

    this.handleValueChange(newValue + '');
  }

  private handleValuePlus(): void {
    let newValue: number | string =
      typeof this.selfValue === 'string' ? parseFloat(this.selfValue) : this.selfValue;

    newValue += this.step;

    if (isNaN(newValue)) {
      newValue = 1;
    } else {
      if (this.min !== null && newValue > this.max) {
        newValue = this.max;
      }

      if (this.precision !== null) {
        newValue = newValue.toFixed(this.precision);
      }
    }

    this.handleValueChange(newValue + '');
  }
}
</script>

<style lang="scss">
@import './InputNumber.scss';
</style>
