<template>
  <div>
    <section class="section">
      <h1>Layout</h1>
    </section>
    <hr />

    <section class="section">
      <h3>radio</h3>
    </section>
    <section class="section">
      <Radio v-model="test">
        AAA
      </Radio>
      <Radio value="BBB">
        BBB
      </Radio>
      {{ test }}
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Radio from '../../components/radio/Radio.vue';

@Component({
  name: 'RadioTest',
  components: {
    Radio,
  },
})
export default class RadioTest extends Vue {
  private test = 1;
  private handleChange(): void {
    console.log(123);
  }
}
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
}
</style>
