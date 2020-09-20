<template>
  <div>
    <section class="section">
      <h1>Input</h1>
    </section>
    <hr />

    <section class="section">
      <h3>Basic</h3>
    </section>
    <section class="section">
      <Input placeholder="input here" :value="value" @change="handleValueChange" />
    </section>
    <section class="section">{{ value }}</section>

    <section class="section">
      <h3>Disabled</h3>
    </section>
    <section class="section">
      <Input disabled placeholder="readonly here" :value="value2" />
    </section>
    <section class="section">
      <Input placeholder="input here" :value="value2" @change="handleValue2Change" />
    </section>

    <section class="section">
      <h3>Allow Clear</h3>
    </section>
    <section class="section">
      <Input
        suffixIcon="search"
        allowClear
        placeholder="input here"
        :value="value3"
        @change="handleValueChange3"
      />
    </section>
    <section class="section">{{ value3 }}</section>

    <section class="section">
      <h3>Icon</h3>
    </section>
    <section class="section">
      <Input prefixIcon="search" />
    </section>
    <section class="section">
      <Input>
        <i slot="prefixIcon" class="icon-search" />
      </Input>
    </section>
    <section class="section">
      <Input suffixIcon="date" />
    </section>
    <section class="section">
      <Input>
        <i slot="suffixIcon" class="icon-date" />
      </Input>
    </section>
    <section class="section">
      <Input prefixIcon="search" suffixIcon="date" />
    </section>
    <section class="section">
      <Input>
        <i slot="prefixIcon" class="icon-search" />
        <i slot="suffixIcon" class="icon-date" />
      </Input>
    </section>

    <section class="section">
      <h3>Compact</h3>
    </section>
    <section class="section">
      <Input>
        <template slot="prefixContent">http://</template>
      </Input>
    </section>
    <section class="section">
      <Input>
        <template slot="suffixContent">.com</template>
      </Input>
    </section>
    <section class="section">
      <Input>
        <template slot="prefixContent">http://</template>
        <template slot="suffixContent">.com</template>
      </Input>
    </section>

    <section class="section">
      <h3>Textarea</h3>
    </section>
    <section class="section">
      <Input
        autoSize
        placeholder="213"
        type="textarea"
        :rows="5"
        :value="value4"
        @change="handleValueChange4"
      />
    </section>
    <section class="section">
      <Input type="textarea" disabled :rows="5" :value="value4" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Input from '../../components/input/Input.vue';

@Component({
  name: 'InputTest',
  components: {
    Input,
  },
})
export default class InputTest extends Vue {
  private value: string = '';

  private value2: string = '';

  private value3: string = 'nnn';

  private value4: string = 'nnn';

  private handleValueChange(value: string): void {
    this.value = value;
  }

  private handleValue2Change(value2: string): void {
    this.value2 = value2;
  }

  private handleValueChange3(value3: string): void {
    this.value3 = value3;
  }

  private handleValueChange4(value4: string): void {
    this.value4 = value4;
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
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  word-break: break-word;
  white-space: pre-line;

  h3 {
    margin: 0;
  }

  ::v-deep .input-container,
  ::v-deep .input-textarea-container {
    width: 300px;
  }
}
</style>
