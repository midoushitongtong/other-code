<template>
  <div class="row">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Row',
})
export default class Button extends Vue {}
</script>

<style lang="scss">
@import './Row.scss';
</style>
