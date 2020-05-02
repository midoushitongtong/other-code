<template>
  <div class="radio-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'RadioGroup',
})
export default class RadioGroup extends Vue {
  @Watch('value')
  private onValueChange(value: unknown) {
    this.selfValue = value;
  }

  @Model('change', {
    required: false,
  })
  public readonly value!: unknown;

  @Emit()
  private change(value: unknown) {
    return value;
  }

  // 内部维护一个 value, 用于更新子组件 radio 的选中状态
  public selfValue: unknown = this.value || '1';

  public onRadioChange(value: unknown): void {
    // emit
    if (this.$listeners.change) {
      this.change(value);
    }

    // 如果没有 value prop 传入, 强行设置 selfValue
    if (Object.prototype.hasOwnProperty.call(this.$props, 'value')) {
      this.selfValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
