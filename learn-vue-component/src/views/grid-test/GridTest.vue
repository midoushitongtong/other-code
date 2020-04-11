<template>
  <div>
    <section class="section">
      <h1>Grid</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Col</h3>
    </section>
    <section class="row-section">
      <Row>
        <Col :span="24">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="12">
          <div>A</div>
        </Col>
        <Col :span="12">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="8">
          <div>A</div>
        </Col>
        <Col :span="8">
          <div>A</div>
        </Col>
        <Col :span="8">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="16">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
      </Row>
      <Row>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="16">
          <div>A</div>
        </Col>
      </Row>
    </section>

    <section class="section">
      <h3>Row Gutter</h3>
    </section>
    <section class="row-section">
      <Row :gutter="10">
        <Col :span="24">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="12">
          <div>A</div>
        </Col>
        <Col :span="12">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="8">
          <div>A</div>
        </Col>
        <Col :span="8">
          <div>A</div>
        </Col>
        <Col :span="8">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
        <Col :span="4">
          <div>A</div>
        </Col>
      </Row>
    </section>

    <section class="section">
      <h3>Row Offset</h3>
    </section>
    <section class="row-section">
      <Row :gutter="10">
        <Col :span="8">
          <div>A</div>
        </Col>
        <Col :span="8" :offset="8">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="8" :offset="8">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="6">
          <div>A</div>
        </Col>
        <Col :span="6" :offset="6">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="6" :offset="6">
          <div>A</div>
        </Col>
        <Col :span="6" :offset="6">
          <div>A</div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="12" :offset="6">
          <div>A</div>
        </Col>
      </Row>
    </section>

    <section class="section">
      <h3>Row Align</h3>
    </section>
    <section class="row-section">
      <Row>
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row align="center">
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row align="end">
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="8">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
    </section>

    <section class="section">
      <h3>Row Justify</h3>
    </section>
    <section class="row-section">
      <Row>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row justify="center">
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row justify="end">
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row justify="around">
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
      </Row>
      <Row justify="between">
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 60px;">A</div>
        </Col>
        <Col :span="5">
          <div style="height: 30px;">A</div>
        </Col>
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
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #06f;
        text-align: center;
      }
    }
  }
}
</style>
