<template>
  <label class="radio">
    <input
      type="radio"
      :value="value"
      :checked="checked"
      @change="$emit('change', $event.target.value)"
    />
    <slot />
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';

@Component({
  name: 'Radio',
})
export default class Radio extends Vue {
  @Model('change', {
    required: false,
    default: null,
  })
  private readonly value!: unknown;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly checked!: boolean;
}
</script>

<style lang="scss" scoped>
@import './Radio.scss';
</style>
