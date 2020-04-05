<template>
  <div :class="['col', span && `col-${span}`]">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Col',
})
export default class Button extends Vue {
  @Prop({
    type: Number,
    required: false,
  })
  private readonly span!: number;
}
</script>

<style lang="scss">
@import './Col.scss';
</style>
