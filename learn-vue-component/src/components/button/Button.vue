<template>
  <button
    :class="[
      'a-button',
      type && buildButtonTypeClass(),
      size && buildButtonSizeClass(),
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text',
      loading && 'is-loading',
    ]"
    :disabled="disabled"
    :type="buildHtmlType()"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <i v-if="loading" class="a-icon-loading" />
    <i v-if="!loading && icon" :class="`a-icon-${icon}`" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  // type
  @Prop({
    type: String,
    required: false,
    default: 'default',
    validator: (value) => {
      return ['default', 'primary'].indexOf(value) !== -1;
    },
  })
  private readonly type!: string;

  // html type
  @Prop({
    type: String,
    required: false,
    default: 'button',
    validator: (value) => {
      return ['button', 'reset', 'submit'].indexOf(value) !== -1;
    },
  })
  private readonly htmlType!: string;

  // size
  @Prop({
    type: String,
    required: false,
    default: null,
    validator: (value) => {
      return ['small', 'large'].indexOf(value) !== -1;
    },
  })
  private readonly size!: string;

  // plain
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly plain!: boolean;

  // round
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly round!: boolean;

  // circle
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly circle!: boolean;

  // text
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly text!: boolean;

  // disabled
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly disabled!: boolean;

  // loading
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly loading!: boolean;

  // icon
  @Prop({
    type: String,
    required: false,
    default: null,
  })
  private readonly icon!: string;

  // autofocus
  @Prop({
    default: false,
  })
  private readonly autofocus!: boolean;

  // event emit
  @Emit()
  private click(e: MouseEvent) {
    return e;
  }

  // generate button type class
  private buildButtonTypeClass = (): string => {
    return `a-button-${this.type}`;
  };

  // generate button size class
  private buildButtonSizeClass = (): string => {
    return `a-button-${this.size}`;
  };

  // generate html type
  private buildHtmlType = (): string => {
    return this.htmlType;
  };

  // handle button click event
  private handleClick = (e: MouseEvent): void => {
    if (this.disabled) {
      return;
    }

    if (this.$listeners.click) {
      // this.$listeners.click();
      this.click(e);
    }
  };
}
</script>

<style lang="scss">
@import './Button.scss';
</style>
