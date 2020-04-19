<template>
  <header class="layout-header">
    <slot />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutHeader',
})
export default class LayoutHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import './LayoutHeader.scss';
</style>
