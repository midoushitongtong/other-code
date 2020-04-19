<template>
  <section :class="['layout', hasSidebarClass() && 'has-sidebar']">
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
    default: null,
  })
  private readonly hasSidebar!: boolean;

  private hasSidebarClass = (): boolean => {
    let hasSidebar: boolean = false;

    if (this.hasSidebar !== null) {
      // 通过 props 强制设置
      hasSidebar = this.hasSidebar;
    } else {
      // 通过检测子组件设置
      const childrenVNode = this.$slots.default;
      if (childrenVNode) {
        const hasLayoutSidebarChildren = childrenVNode.some((item) => {
          if (item.componentOptions && item.componentOptions.tag === 'LayoutSidebar') {
            return true;
          }
        });
        if (hasLayoutSidebarChildren) {
          hasSidebar = true;
        }
      }
    }

    return hasSidebar;
  };
}
</script>

<style lang="scss" scoped>
@import './Layout.scss';
</style>
