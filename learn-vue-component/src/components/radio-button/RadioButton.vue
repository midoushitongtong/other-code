<template>
  <button :class="['radio-button', selfChecked && 'checked', disabled && 'disabled']">
    <label>
      <span class="input">
        <input
          type="radio"
          :value="value"
          :checked="selfChecked"
          :disabled="disabled"
          @change="handleChange"
          class="html-input"
        />
      </span>
      <span class="label">
        <slot />
      </span>
    </label>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Emit, Watch } from 'vue-property-decorator';
import RadioGroup from '../radio-group/RadioGroup.vue';

@Component({
  name: 'Radio',
})
export default class Radio extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: null,
  })
  private readonly checked!: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly disabled!: boolean;

  @Watch('$parent.selfValue')
  private onValueChange(value: unknown) {
    // RadioGroup 的数据发生改变, 重新计算是否选中
    this.selfChecked = value === this.value;
  }

  @Model('change', {
    required: false,
    default: null,
  })
  private readonly value!: unknown;

  @Emit()
  private change(value: unknown) {
    return value;
  }

  public readonly $parent!: RadioGroup;

  private readonly hasRadioGroup =
    this.$parent.$vnode.componentOptions && this.$parent.$vnode.componentOptions.tag === 'RadioGroup';

  // 内部维护一个 checked, 用于设置选中状态
  private selfChecked: boolean = this.hasRadioGroup
    ? this.$parent.selfValue === this.value
    : this.checked;

  private handleChange(): void {
    // emit
    if (this.$listeners.change) {
      this.change(this.value);
    }

    if (this.hasRadioGroup) {
      // 通知 RadioGroup
      this.$parent.onRadioChange(this.value);
    } else {
      // 如果没有 RadioGroup 包裹, 也没有 checked prop 传入, 强行设置 selfChecked
      if (this.checked === null) {
        this.selfChecked = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RadioButton.scss';
</style>
