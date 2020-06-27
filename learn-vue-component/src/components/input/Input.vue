<template>
  <div class="input-container" v-if="type === 'text'">
    <!-- prefix icon -->
    <span v-if="prefixIcon" class="prefix-icon">
      <i :class="`icon-${prefixIcon}`" />
    </span>

    <!-- prefix icon slot -->
    <span v-if="!prefixIcon && $slots.prefixIcon" class="prefix-icon">
      <slot name="prefixIcon" />
    </span>

    <input
      :class="[
        'input',
        disabled && 'disabled',
        hasShowAllowClearButton && 'has-allow-clear',
        (prefixIcon || $slots.prefixIcon) && 'has-prefix-icon',
        !hasShowAllowClearButton && (suffixIcon || $slots.suffixIcon) && 'has-suffix-icon',
      ]"
      :value="selfValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="disabled"
      @input="handleInputValeChange"
    />

    <!-- suffix icon -->
    <span v-if="!hasShowAllowClearButton && suffixIcon" class="suffix-icon">
      <i :class="`icon-${suffixIcon}`" />
    </span>

    <!-- suffix icon slot -->
    <span v-if="!hasShowAllowClearButton && !suffixIcon && $slots.suffixIcon" class="suffix-icon">
      <slot name="suffixIcon" />
    </span>

    <!-- allow clear button -->
    <div v-if="hasShowAllowClearButton" class="allow-clear-button" @click="handleClearValue">
      <i class="icon-close" />
    </div>
  </div>

  <div class="input-textarea-container" v-else>
    <textarea
      ref="textarea"
      type="textarea"
      :rows="rows"
      :class="['input', disabled && 'disabled', hasShowAllowClearButton && 'has-allow-clear']"
      :value="selfValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="disabled"
      @input="handleTextareaValeChange"
    />
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

  @Prop({
    required: false,
    type: String,
    default: null,
  })
  private readonly prefixIcon!: string;

  @Prop({
    required: false,
    type: String,
    default: null,
  })
  private readonly suffixIcon!: string;

  @Prop({
    required: false,
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'textarea'].includes(value);
    },
  })
  private readonly type!: string;

  @Prop({
    required: false,
    type: Number,
    default: 1,
  })
  private readonly rows!: number;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  private readonly autoSize!: boolean;

  @Watch('value')
  private onValueChange(value: string): void {
    this.selfValue = value;
  }

  @Emit()
  private change(value: string): string {
    return value;
  }

  /**
   * dom中临时的 textarea
   */
  private tempTextArea!: HTMLTextAreaElement;

  /**
   * textarea 默认的高度
   */
  private textAreaDefaultOffsetHeight!: number;

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
  private handleInputValeChange(event: Event): void {
    const target = event.target as HTMLInputElement;

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

  /**
   * 处理 textarea 事件
   */
  private handleTextareaValeChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;

    this.selfValue = target.value;

    if (this.$listeners.change) {
      // this.$emit('change', event.target.value);
      this.change(target.value);
    }

    if (this.autoSize) {
      this.handleTextAreaAutoSize(target);
    }
  }

  private handleTextAreaAutoSize(target: HTMLTextAreaElement): void {
    if (!this.tempTextArea) {
      this.tempTextArea = document.createElement('textarea');
      document.body.appendChild(this.tempTextArea);
    }

    // 将 textarea 的样式复制到(临时的 textarea) 中
    this.cloneTextareaStyle(target, this.tempTextArea);

    this.tempTextArea.value = target.value;

    const tempTextAreaScrollHeight = this.tempTextArea.scrollHeight;

    if (tempTextAreaScrollHeight >= this.textAreaDefaultOffsetHeight) {
      target.style.height = tempTextAreaScrollHeight + 2 + 'px';
    } else {
      target.style.height = this.textAreaDefaultOffsetHeight + 'px';
    }
  }

  private cloneTextareaStyle(el1: HTMLTextAreaElement, el2: HTMLTextAreaElement): void {
    const style = window.getComputedStyle(el1);

    const contextStyle = [
      'width',
      'line-height',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'font-size',
      'font-weight',
      'font-family',
      'border-width',
      'box-sizing',
    ]
      .map((name) => `${name}:${style.getPropertyValue(name)}`)
      .join(';');

    const hiddenStyle = `
      height: 0 !important;
      visibility: hidden !important;
      overflow: hidden !important;
      position: absolute !important;
      z-index: -999 !important;
      top: 0 !important;
      right: 0 !important;
    `;

    el2.setAttribute('style', `${contextStyle};${hiddenStyle}`);
  }

  public mounted(): void {
    if (this.type === 'textarea' && !this.textAreaDefaultOffsetHeight) {
      this.textAreaDefaultOffsetHeight = (this.$refs['textarea'] as HTMLTextAreaElement).offsetHeight;
    }
  }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>
