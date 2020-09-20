<template>
  <label :class="['radio', selfChecked && 'checked', selfDisabled && 'disabled']">
    <span class="input">
      <input
        type="radio"
        :value="value"
        :checked="selfChecked"
        :disabled="selfDisabled"
        @change="handleChange"
        class="html-input"
      />
      <span class="icon" />
    </span>
    <span class="label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator';
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
    default: null,
  })
  private readonly disabled!: boolean;

  @Model('change', {
    required: false,
    default: null,
  })
  private readonly value!: unknown;

  @Emit()
  private change(value: unknown): unknown {
    return value;
  }

  public readonly $parent!: RadioGroup;

  // 内部维护一个 checked, 用于设置选中状态
  private innerChecked: boolean = this.checked;

  private get hasRadioGroup(): boolean {
    return (
      !!this.$parent.$vnode.componentOptions && this.$parent.$vnode.componentOptions.tag === 'RadioGroup'
    );
  }

  // 获取 checked 状态
  private get selfChecked(): boolean {
    return this.hasRadioGroup ? this.$parent.innerValue === this.value : this.innerChecked;
  }

  // 获取 disabled 状态
  private get selfDisabled(): boolean {
    return this.hasRadioGroup ? this.$parent.disabled : this.disabled;
  }

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
        this.innerChecked = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Radio.scss';
</style>
