<template>
  <div class="virtual-list-1">
    <VirtualList :rowHeight="50" :rowCount="10" :items="dataSource1">
      <template #rowRenderer="{ item }">
        <div class="list-item">{{ item.value }}</div>
      </template>
    </VirtualList>
  </div>

  <!-- <div class="virtual-list-2">
    <VirtualList :rowHeight="50" :rowCount="10" :items="dataSource2" autoHeight>
      <template #rowRenderer="{ item }">
        <div class="list-item">{{ item.id }} - {{ item.value }}</div>
      </template>
    </VirtualList>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mock from 'mockjs';
import VirtualList from '@/components/VirtualList.vue';

export default defineComponent({
  name: 'App',
  components: {
    VirtualList,
  },
  setup() {
    const dataSource1 = [];
    for (let i = 1; i <= 500; i++) {
      dataSource1.push({
        id: i,
        value: i,
      });
    }

    const dataSource2 = [];

    for (let i = 1; i <= 500; i++) {
      dataSource2.push({
        id: i,
        value: Mock.Random.sentence(5, 50),
      });
    }

    return {
      dataSource1,
      dataSource2,
    };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.virtual-list-1 {
  .list-item {
    display: flex;
    height: 50px;
    border-bottom: 1px solid red;
    align-items: center;
    font-weight: bold;
  }
}

.virtual-list-2 {
  .list-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid red;
    align-items: center;
    font-weight: bold;
  }
}
</style>
