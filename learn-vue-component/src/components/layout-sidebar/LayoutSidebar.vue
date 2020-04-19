<template>
  <section class="layout-sidebar" :style="widthStyle()">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'LayoutSidebar',
})
export default class LayoutSidebar extends Vue {
  @Prop({
    type: [Number, String],
    required: false,
    default: 300,
  })
  private readonly width!: number | string;

  private widthStyle = (): object => {
    const { width } = this;

    const widthStyle = typeof width === 'number' ? `${width}px` : width;

    return {
      width: widthStyle,
    };
  };
}
</script>

<style lang="scss" scoped>
@import './LayoutSidebar.scss';
</style>
