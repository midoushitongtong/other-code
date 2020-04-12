<template>
  <div
    :class="['row', align && `row-align-${align}`, justify && `row-justify-${justify}`]"
    :style="gutter && gutterStyle()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Row',
})
export default class Row extends Vue {
  @Prop({
    type: Number,
    required: false,
  })
  public readonly gutter!: number;

  @Prop({
    type: String,
    required: false,
    validator: (value) => {
      return ['start', 'center', 'end'].indexOf(value) !== -1;
    },
  })
  private readonly align!: string;

  @Prop({
    type: String,
    required: false,
    validator: (value) => {
      return ['flex-start', 'center', 'end', 'around', 'between'].indexOf(value) !== -1;
    },
  })
  private readonly justify!: string;

  private gutterStyle = (): string | object => {
    if (this.gutter != 0) {
      const value = -(this.gutter / 2) + 'px';

      return {
        marginLeft: value,
        marginRight: value,
      };
    }

    return '';
  };
}
</script>

<style lang="scss">
@import './Row.scss';
</style>
