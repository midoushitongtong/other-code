<template>
  <div :class="['col', span && `col-${span}`, offset && `col-offset-${offset}`]" :style="gutterStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Row from '../row/Row.vue';

@Component({
  name: 'Col',
})
export default class Button extends Vue {
  @Prop({
    type: Number,
    required: false,
  })
  private readonly span!: number;

  @Prop({
    type: Number,
    required: false,
  })
  private readonly offset!: number;

  public readonly $parent!: Row;

  private get gutterStyle() {
    if (this.$parent.gutter && this.$parent.gutter !== 0) {
      const value = this.$parent.gutter / 2 + 'px';

      return {
        paddingLeft: value,
        paddingRight: value,
      };
    }

    return '';
  }
}
</script>

<style lang="scss">
@import './Col.scss';
</style>
