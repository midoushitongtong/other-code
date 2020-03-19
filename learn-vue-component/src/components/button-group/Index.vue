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
    margin-left: -1px;
    &:last-child:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
}
</style>