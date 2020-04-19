<template>
  <section :class="['layout', hasSidebar && 'has-sidebar']">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Layout',
})
export default class Layout extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  private readonly hasSidebar!: boolean;
}
</script>

<style lang="scss" scoped>
@import './Layout.scss';
</style>
