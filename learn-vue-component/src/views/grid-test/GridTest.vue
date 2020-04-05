<template>
  <div>
    <section class="section">
      <h1>Grid</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Row & Col</h3>
    </section>
    <section class="row-section">
      <Row>
        <Col :span="24">A</Col>
      </Row>
      <Row>
        <Col :span="12">A</Col>
        <Col :span="12">A</Col>
      </Row>
      <Row>
        <Col :span="8">A</Col>
        <Col :span="8">A</Col>
        <Col :span="8">A</Col>
      </Row>
      <Row>
        <Col :span="6">A</Col>
        <Col :span="6">A</Col>
        <Col :span="6">A</Col>
        <Col :span="6">A</Col>
      </Row>
      <Row>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
      </Row>
      <Row>
        <Col :span="16">A</Col>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
      </Row>
      <Row>
        <Col :span="4">A</Col>
        <Col :span="4">A</Col>
        <Col :span="16">A</Col>
      </Row>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Row from '../../components/row/Row.vue';
import Col from '../../components/col/Col.vue';

@Component({
  name: 'GridTest',
  components: {
    Row,
    Col,
  },
})
export default class GridTest extends Vue {}
</script>

<style lang="scss" scoped>
.section {
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h3 {
    margin: 0;
  }
}

.row-section {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  .row {
    margin-bottom: 1rem;
    .col {
      border: 1px solid #06f;
      text-align: center;
    }
  }
}
</style>
