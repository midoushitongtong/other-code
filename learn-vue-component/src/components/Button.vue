<template>
  <button
    :class="[
      'button',
      `button--${type}`,
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled'
      dwq
    ]"
  >
    <slot></slot>
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
    // disabled
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.button {
  padding: 0.75rem 1rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.15s border-color ease, 0.15s background-color ease, 0.15s color ease,
    0.15s box-shadow ease;
  cursor: pointer;

  & + .button {
    margin-left: 1rem;
  }

  // type - default
  @at-root {
    $button-primary-class-name: & + '--' + 'default';
    #{$button-primary-class-name} {
      border-color: #c3c5ca;
      background-color: #fff;
      color: #333;
      &:hover {
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
        &:hover {
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
        &:hover {
          border-color: #ebeef5;
          background-color: #fff;
          color: #c0c4cc;
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
  }

  // type - primary
  @at-root {
    $button-primary-class-name: & + '--' + 'primary';
    #{$button-primary-class-name} {
      border-color: #3e84ee;
      background-color: #3e84ee;
      color: #fff;
      &:hover {
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
        &:hover {
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
        &:hover {
          border-color: #a0cfff;
          background-color: #a0cfff;
          color: #fff;
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
  }

  // round
  &.is-round {
    border-radius: 25px;
  }

  // circle
  &.is-circle {
    border-radius: 50%;
  }

  // disabled
  &.is-disabled {
    cursor: not-allowed;
  }
}
</style>
