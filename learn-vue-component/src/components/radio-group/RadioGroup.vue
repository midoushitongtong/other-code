<template>
  <div class="radio-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Watch, Prop, Provide } from 'vue-property-decorator';

@Component({
  name: 'RadioGroup',
})
export default class RadioGroup extends Vue {
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
  public readonly value!: unknown;

  @Emit()
  private change(value: unknown) {
    return value;
  }

  @Watch('value')
  private onValueChange(value: unknown) {
    this.innerValue = value;
  }

  // 内部维护一个 value, 用于更新子组件 radio 的选中状态
  public innerValue: unknown = this.value;

  public onRadioChange(value: unknown): void {
    // emit
    if (this.$listeners.change) {
      this.change(value);
    }

    // 如果没有 value prop 传入, 强行设置 innerValue
    if (this.value === null) {
      this.innerValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
