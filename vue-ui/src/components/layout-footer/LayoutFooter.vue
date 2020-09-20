<template>
  <footer class="layout-footer">
    <slot />
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutFooter',
})
export default class LayoutFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import './LayoutFooter.scss';
</style>
