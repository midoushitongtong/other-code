<template>
  <section class="layout-content">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutContent',
})
export default class LayoutContent extends Vue {}
</script>

<style lang="scss" scoped>
@import './LayoutContent.scss';
</style>
