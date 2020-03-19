<template>
  <section class="a-button-group">
    <slot />
  </section>
</template>

<script>
</script>

<style lang="scss">
.a-button-group {
  display: flex;
  .a-button {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
}
</style>