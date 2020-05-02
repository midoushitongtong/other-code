<template>
  <div
    :class="[
      'col',
      span && `col-${span}`,
      offset && `col-offset-${offset}`,
      push && `col-push-${push}`,
      pull && `col-pull-${pull}`,
      responsiveClass(),
    ]"
    :style="gutterStyle()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Row from '../row/Row.vue';

@Component({
  name: 'Col',
})
export default class Col extends Vue {
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

  @Prop({
    type: Number,
    required: false,
  })
  private readonly push!: number;

  @Prop({
    type: Number,
    required: false,
  })
  private readonly pull!: number;

  @Prop({
    type: [Number, Object],
    required: false,
  })
  private readonly xs!: number | { span: number; offset: number };

  @Prop({
    type: [Number, Object],
    required: false,
  })
  private readonly sm!: number | { span: number; offset: number };

  @Prop({
    type: [Number, Object],
    required: false,
  })
  private readonly md!: number | { span: number; offset: number };

  @Prop({
    type: [Number, Object],
    required: false,
  })
  private readonly lg!: number | { span: number; offset: number };

  @Prop({
    type: [Number, Object],
    required: false,
  })
  private readonly xl!: number | { span: number; offset: number };

  public readonly $parent!: Row;

  /**
   * 生成响应式的 class 类名
   */
  private generatorResponsiveClass(responsiveSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string[] {
    const responsiveValue = this[responsiveSize];
    const responsiveClass: string[] = [];

    if (typeof responsiveValue === 'number') {
      responsiveClass.push(`col-${responsiveSize}-${responsiveValue}`);
    } else {
      const span = responsiveValue.span;
      const offset = responsiveValue.offset;
      span && responsiveClass.push(`col-${responsiveSize}-${span}`);
      offset && responsiveClass.push(`col-${responsiveSize}-offset-${offset}`);
    }

    return responsiveClass;
  }

  private responsiveClass(): string {
    const responsiveClassList: string[] = [];

    this.xs && responsiveClassList.push(...this.generatorResponsiveClass('xs'));
    this.sm && responsiveClassList.push(...this.generatorResponsiveClass('sm'));
    this.md && responsiveClassList.push(...this.generatorResponsiveClass('md'));
    this.lg && responsiveClassList.push(...this.generatorResponsiveClass('lg'));
    this.xl && responsiveClassList.push(...this.generatorResponsiveClass('xl'));

    return responsiveClassList.join(' ');
  }

  private gutterStyle(): string | object {
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
