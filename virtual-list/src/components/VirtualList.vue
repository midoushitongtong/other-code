<template>
  <!-- 容器 -->
  <div ref="viewportRef" class="viewport" @scroll="handleScroll">
    <!-- 虚拟的滚动条 -->
    <div ref="scrollBarRef" class="scroll-bar"></div>

    <!-- 真实的列表 -->
    <div
      class="scroll-list"
      :style="{
        transform: `translateY(${offset}px)`,
      }"
    >
      <template v-for="(item, index) of visibleItems" :key="item">
        <div class="scroll-list-item" :vid="index">
          <slot name="rowRenderer" :item="item" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, onUpdated, ref } from 'vue';

type Position = {
  height: number;
  top: number;
  bottom: number;
};

export default defineComponent({
  name: 'VirtualList',
  props: {
    // 行高 (每一行的固定高度)
    rowHeight: {
      type: Number,
      required: true,
    },
    // 列表中的行数 (也就是渲染的数量)
    rowCount: {
      type: Number,
      required: true,
    },
    // 数据源
    items: {
      type: Array,
      required: true,
    },
    // 自动高度
    autoHeight: {
      type: Boolean,
    },
  },
  setup(props) {
    const viewportRef = ref<HTMLDivElement | null>(null);
    const scrollBarRef = ref<HTMLDivElement | null>(null);
    const start = ref(0); // 需要渲染的 items 开始位置
    const end = ref(props.rowCount); // 需要渲染的 items 结束位置
    const offset = ref(0); // 距离顶部的偏移量
    const positions = ref<Position[]>([]); // items 的位置信息

    // 前面预留几个 items
    // 需要取 "start" 和 "rowCount" 中的最小值
    // 为什么取 start ? 因为一开始 start 0, 所以前面不需要预留 items
    const prevCount = computed(() => {
      return Math.min(start.value, props.rowCount);
    });

    // 后面预留几个 items
    // 需要取 "总长度 - end" 和 "rowCount" 中的最小值
    // 为什么取 "总长度 - end" ? 假设总长度是 10, rowCount 是 3 滚动到第 9 个时候, 这时候后面只需要预留 1 个 items 而不是 3 个 items
    const nextCount = computed(() => {
      return Math.min(props.items.length - end.value, props.rowCount);
    });

    // 当前需要渲染的 items
    const visibleItems = computed(() => {
      const _start = start.value - prevCount.value;
      const _end = end.value + nextCount.value;

      return props.items.slice(_start, _end);
    });

    // 缓存每个 item 的高度
    const cachePositions = () => {
      positions.value = props.items.map((item, index) => ({
        height: props.rowHeight,
        top: index * props.rowHeight,
        bottom: (index + 1) * props.rowHeight,
      }));
    };

    /**
     * 根据 scrollTop 查找最匹配的 item
     */
    const getStartIndex = (scrollTop: number) => {
      let start = 0;
      let end = positions.value.length - 1;
      let temp = null; // 二分查找找不到情况下返回的值
      while (start <= end) {
        const middleIndex = parseInt((start + end) / 2 + '', 10);
        const middleValue = positions.value[middleIndex].bottom;
        // 二分查找
        if (middleValue === scrollTop) {
          return middleIndex + 1;
        } else if (middleValue < scrollTop) {
          start = middleIndex + 1;
        } else if (middleValue > scrollTop) {
          if (temp === null || temp > middleIndex) {
            temp = middleIndex;
          }
          end = middleIndex - 1;
        }
      }
      return temp || 0;
    };

    // 监听滚动条, 更新需要渲染的 items
    const handleScroll = () => {
      if (viewportRef.value) {
        const scrollTop = viewportRef.value.scrollTop;
        if (props.autoHeight) {
          start.value = getStartIndex(scrollTop); // 更新开始位置
          end.value = start.value + props.rowCount; // 更新结束位置
          offset.value = positions.value[start.value - prevCount.value]
            ? positions.value[start.value - prevCount.value].bottom
            : 0; // 更新距离顶部的偏移量
        } else {
          start.value = Math.floor(scrollTop / props.rowHeight); // 更新开始位置
          end.value = start.value + props.rowCount; // 更新结束位置
          offset.value = start.value * props.rowHeight - prevCount.value * props.rowHeight; // 更新距离顶部的偏移量
        }
      }
    };

    // dom 更新的时候, 重新计算 positions
    onUpdated(() => {
      nextTick(() => {
        const nodes = viewportRef.value?.querySelectorAll('.scroll-list-item');
        if (nodes && nodes.length > 0) {
          nodes.forEach((item) => {
            const { height } = item.getBoundingClientRect();
            const id = parseInt(item.getAttribute('vid') as string, 10);
            const oldHeight = positions.value[id].height;
            const val = oldHeight - height;

            if (val) {
              positions.value[id].height = height;
              positions.value[id].bottom = positions.value[id].bottom - val;

              for (let i = id + 1; i < positions.value.length; i++) {
                positions.value[i].top = positions.value[i - 1].bottom;
                positions.value[i].bottom = positions.value[i].bottom - val;
              }
            }
          });
          if (scrollBarRef.value) {
            scrollBarRef.value.style.height = `${
              positions.value[positions.value.length - 1].bottom
            }px`;
          }
        }
      });
    });

    onMounted(() => {
      if (viewportRef.value && scrollBarRef.value) {
        viewportRef.value.style.height = props.rowHeight * props.rowCount + 'px';
        scrollBarRef.value.style.height = props.rowHeight * props.items.length + 'px';

        cachePositions();
      }
    });

    return {
      viewportRef,
      scrollBarRef,
      visibleItems,
      handleScroll,
      offset,
    };
  },
});
</script>

<style lang="scss">
.viewport {
  position: relative;
  overflow-y: auto;

  .scroll-list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
