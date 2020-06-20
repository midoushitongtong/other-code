<template>
  <div :class="['checkbox-group']">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Watch, Prop } from 'vue-property-decorator';

@Component({
  name: 'CheckboxGroup',
})
export default class CheckboxGroup extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  public readonly disabled!: boolean;

  @Model('change', {
    required: false,
    default: null,
  })
  public readonly value!: Array<unknown>;

  @Emit()
  private change(value: unknown): unknown {
    return value;
  }

  @Watch('value')
  private onValueChange(value: Array<unknown>): void {
    this.innerValue = value;
  }

  // 内部维护一个 value, 用于更新子组件 checkbox 的选中状态
  public innerValue: Array<unknown> = this.value;

  public onCheckboxChange(value: unknown): void {
    let newValue = [...this.value];
    if (newValue.find((item) => item === value)) {
      newValue = newValue.filter((item) => item !== value);
    } else {
      newValue.push(value);
    }

    // emit
    if (this.$listeners.change) {
      this.change(newValue);
    }

    // 如果没有 value prop 传入, 强行设置 innerValue
    if (this.value === null) {
      this.innerValue = newValue;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CheckboxGroup.scss';
</style>
