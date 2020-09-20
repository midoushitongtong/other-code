<template>
  <section class="button-group">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'ButtonGroup',
})
export default class ButtonGroup extends Vue {}
</script>

<style lang="scss">
@import './ButtonGroup.scss';
</style>
