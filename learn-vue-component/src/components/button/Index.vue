<template>
  <button
    :class="[
      'a-button',
      `a-button-${type}`,
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text'
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    // button type
    type: {
      type: String,
      default: 'default'
    },
    // plain
    plain: {
      type: Boolean,
      default: false
    },
    // round
    round: {
      type: Boolean,
      default: false
    },
    // circle
    circle: {
      type: Boolean,
      default: false
    },
    // text
    text: {
      type: Boolean,
      default: false
    },
    // disabled
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // handle button click event
    handleClick() {
      if (this.$props.disabled) {
        return;
      }
      this.$emit('click', event);
    }
  }
};
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

  // type - default
  @at-root {
    $button-default-class-name: & + '-' + 'default';
    #{$button-default-class-name} {
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
  @at-root {
    $button-primary-class-name: & + '-' + 'primary';
    #{$button-primary-class-name} {
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

  // round
  &.is-round {
    border-radius: 1.5rem;
  }

  // circle
  &.is-circle {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 1;
    border-radius: 50%;
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
}
</style>
