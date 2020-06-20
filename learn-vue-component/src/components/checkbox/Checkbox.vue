<template>
  <label :class="['checkbox', selfChecked && 'checked', selfDisabled && 'disabled']">
    <span class="input">
      <input
        type="checkbox"
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
import CheckboxGroup from '../checkbox-group/CheckboxGroup.vue';

@Component({
  name: 'Checkbox',
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
  private change(isChekcked: boolean): boolean {
    return isChekcked;
  }

  public readonly $parent!: CheckboxGroup;

  // 内部维护一个 checked, 用于设置选中状态
  private innerChecked: boolean = this.checked;

  private get hasCheckboxGroup(): boolean {
    return (
      !!this.$parent.$vnode.componentOptions &&
      this.$parent.$vnode.componentOptions.tag === 'CheckboxGroup'
    );
  }

  // 获取 checked 状态
  private get selfChecked(): boolean {
    return this.hasCheckboxGroup ? this.$parent.innerValue.includes(this.value) : this.innerChecked;
  }

  // 获取 disabled 状态
  private get selfDisabled(): boolean {
    return this.hasCheckboxGroup ? this.$parent.disabled : this.disabled;
  }

  private handleChange(): void {
    // emit
    if (this.$listeners.change) {
      // 如果有 CheckGroup 返回自身仔 CheckboxGroup 中是否选中
      if (this.hasCheckboxGroup) {
        this.change(!this.$parent.innerValue.includes(this.value));
      } else {
        // 返回自身是否选中
        this.change(!this.innerChecked);
      }
    }

    if (this.hasCheckboxGroup) {
      // 通知 CheckboxGroup
      this.$parent.onCheckboxChange(this.value);
    } else {
      // 如果没有 CheckboxGroup 包裹, 也没有 checked prop 传入, 强行设置 selfChecked
      if (this.checked === null) {
        this.innerChecked = !this.innerChecked;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
