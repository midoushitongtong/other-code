<template>
  <div>
    <section class="section">
      <h1>Layout</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Layout</h3>
    </section>
    <section class="section">
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </section>

    <section class="section">
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutSidebar>Sidebar</LayoutSidebar>
          <LayoutContent>Content</LayoutContent>
        </Layout>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </section>

    <section class="section">
      <Layout>
        <LayoutSidebar>Sidebar</LayoutSidebar>
        <Layout>
          <LayoutHeader>Header</LayoutHeader>
          <LayoutContent>Content</LayoutContent>
          <LayoutFooter>Footer</LayoutFooter>
        </Layout>
      </Layout>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '../../components/layout/Layout.vue';
import LayoutHeader from '../../components/layout-header/LayoutHeader.vue';
import LayoutFooter from '../../components/layout-footer/LayoutFooter.vue';
import LayoutContent from '../../components/layout-content/LayoutContent.vue';
import LayoutSidebar from '../../components/layout-sidebar/LayoutSidebar.vue';

@Component({
  name: 'LayoutTest',
  components: {
    Layout,
    LayoutHeader,
    LayoutFooter,
    LayoutContent,
    LayoutSidebar,
  },
})
export default class LayoutTest extends Vue {}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h3 {
    margin: 0;
  }
  .layout {
    text-align: center;
    color: #fff;
    .layout-header,
    .layout-footer {
      background-color: #7dbcea;
    }
    .layout-sidebar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3ba0e9;
    }
    .layout-content {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(16, 142, 233, 1);
      min-height: 100px;
    }
  }
}
</style>
