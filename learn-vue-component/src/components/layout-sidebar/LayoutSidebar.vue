<template>
  <section class="layout-sidebar">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutSidebar',
})
export default class LayoutSidebar extends Vue {}
</script>

<style lang="scss" scoped>
@import './LayoutSidebar.scss';
</style>
