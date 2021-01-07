<template>
  <div class="text-filter">
    <div class="text-filter__input">
      <TextField
        v-model="filter"
        :placeholder="placeholder"
        icon="filter_alt"
        full-width
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'nuxt-property-decorator'

@Component
export default class TextFilter extends Vue {
  @Prop({ type: String })
  readonly placeholder!: string

  filter = ''

  @Watch('filter', { immediate: true })
  onChangeFilter(val: string, oldVal: string) {
    if (val !== oldVal) {
      this.$emit('filter', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-filter {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__icon {
    flex-shrink: 0;
    flex-grow: 0;
    color: #616161;
  }

  &__input {
    flex-shrink: 0;
    flex-grow: 1;
  }
}
</style>
