<template>
  <section class="a-button-group">
    <slot />
  </section>
</template>

<style lang="scss">
.a-button-group {
  display: flex;
  .a-button {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
