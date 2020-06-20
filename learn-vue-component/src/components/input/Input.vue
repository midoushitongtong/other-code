<template>
  <div class="input-container">
    <input
      :class="['input', disabled && 'disabled']"
      :value="selfValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="disabled"
      @input="handleChangeVale"
    />
    <!-- allow clear button -->
    <div v-if="hasShowAllowClearButton" class="allow-clear-button" @click="handleClearValue">
      <i class="icon-close" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'Input',
})
export default class Input extends Vue {
  @Prop({
    required: false,
    type: String,
    default: '',
  })
  private readonly placeholder!: string;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  private readonly disabled!: boolean;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  private readonly allowClear!: boolean;

  @Prop({
    required: false,
    type: String,
    default: '',
  })
  private readonly value!: string;

  @Watch('value')
  private onValueChange(value: string): void {
    this.selfValue = value;
  }

  @Emit()
  private change(value: string): string {
    return value;
  }

  /**
   * 内部维护一个值(input 最终显示的也是内部的值)
   */
  private selfValue: string = this.value;

  /**
   * 外部 value 发生变化, 更新内部 value
   */
  private get hasShowAllowClearButton(): boolean {
    return this.allowClear && this.selfValue.length > 0;
  }

  /**
   * 处理 input 事件
   */
  private handleChangeVale(event: Event): void {
    const target = <HTMLInputElement>event.target;

    this.selfValue = target.value;

    if (this.$listeners.change) {
      // this.$emit('change', event.target.value);
      this.change(target.value);
    }
  }

  /**
   * 清空 value
   */
  private handleClearValue(): void {
    this.selfValue = '';

    if (this.$listeners.change) {
      this.change('');
    }
  }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>
