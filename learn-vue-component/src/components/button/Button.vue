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
.a-button {
  padding: 0.45rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-size: 0.9rem;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  transition: 0.15s border-color ease, 0.15s background-color ease, 0.15s color ease,
    0.15s box-shadow ease;
  &:focus {
    z-index: 1;
  }

  // round
  &.is-round {
    border-radius: 1.5rem;
  }

  // circle
  &.is-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    [class*='a-icon-'] {
      margin-left: 0;
    }
  }

  // text
  &.is-text {
    border-color: transparent;
    background-color: transparent;
    color: #409eff;
    &:hover,
    &:active,
    &:focus {
      border-color: transparent;
      background-color: transparent;
      color: #1578e2;
      box-shadow: none;
    }
  }

  // disabled
  &.is-disabled {
    cursor: not-allowed;
  }

  // loading
  &.is-loading {
    position: relative;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      right: -1px;
      bottom: -1px;
      left: -1px;
      border-radius: inherit;
      background-color: rgba(255, 255, 255, 0.35);
      pointer-events: none;
    }
  }

  // icon
  [class*='a-icon'] {
    font-size: 0.85rem;
  }
  [class*='a-icon'] + span {
    margin-left: 0.25rem;
  }

  // type - default
  $button-type-default-class-name: & + '-' + 'default';
  @at-root {
    #{$button-type-default-class-name} {
      border-color: #c3c5ca;
      background-color: #fff;
      color: #333;
      &:hover,
      &:active {
        border-color: #c6e2ff;
        background-color: #ecf5ff;
        color: #409eff;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(7, 99, 238, 0.333);
      }

      // plain
      &.is-plain {
        border-color: #c3c5ca;
        background-color: #fff;
        color: #333;
        &:hover,
        &:active {
          border-color: #c6e2ff;
          background-color: #fff;
          color: #409eff;
        }
        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(7, 99, 238, 0.333);
        }
      }

      // disabled
      &.is-disabled {
        border-color: #ebeef5;
        background-color: #fff;
        color: #c0c4cc;
        &:hover,
        &:active,
        &:focus {
          border-color: #ebeef5;
          background-color: #fff;
          color: #c0c4cc;
        }
      }
    }
  }

  // type - primary
  $button-type-primary-class-name: & + '-' + 'primary';
  @at-root {
    #{$button-type-primary-class-name} {
      border-color: #3e84ee;
      background-color: #3e84ee;
      color: #fff;
      &:hover,
      &:active {
        border-color: #1b6de9;
        background-color: #1b6de9;
        color: #fff;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(7, 99, 238, 0.333);
      }

      // plain
      &.is-plain {
        border-color: #b3d8ff;
        background-color: #fff;
        color: #409eff;
        &:hover,
        &:active {
          border-color: #3e84ee;
          background-color: #3e84ee;
          color: #fff;
        }
        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(7, 99, 238, 0.333);
        }
      }

      // disabled
      &.is-disabled {
        border-color: #a0cfff;
        background-color: #a0cfff;
        color: #fff;
        &:hover,
        &:active,
        &:focus {
          border-color: #a0cfff;
          background-color: #a0cfff;
          color: #fff;
          box-shadow: none;
        }
      }
    }
  }

  // size - small
  $button-size-small-class-name: & + '-' + 'small';
  @at-root {
    #{$button-size-small-class-name} {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
      &.is-circle {
        width: 2rem;
        height: 2rem;
      }
      [class*='a-icon-'] {
        font-size: 0.75rem;
      }
    }
  }

  // size - large
  $button-size-large-class-name: & + '-' + 'large';
  @at-root {
    #{$button-size-large-class-name} {
      padding: 0.55rem 0.85rem;
      font-size: 1.2rem;
      line-height: 1.5;
      border-radius: 0.3rem;
      &.is-circle {
        width: 3.25rem;
        height: 3.25rem;
      }
      [class*='a-icon-'] {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
