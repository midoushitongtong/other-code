<template>
  <label :class="['radio', checked && 'checked', selfChecked && 'checked']">
    <span class="input">
      <input type="radio" :value="value" :checked="checked" @change="handleChange" class="html-input" />
      <span class="icon" />
    </span>
    <span class="label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator';

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

  @Model('change', {
    required: false,
    default: null,
  })
  private readonly value!: unknown;

  // v-model 的 change
  @Emit()
  private change(value: unknown) {
    return value;
  }

  /**
   * 内部维护一个 checked, 用于强行设置选中状态
   */
  private selfChecked: boolean = false;

  private handleChange() {
    if (this.$listeners.change) {
      this.change(this.value);
    }

    if (this.checked === null) {
      // 强行设置选中状态
      this.selfChecked = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Radio.scss';
</style>
