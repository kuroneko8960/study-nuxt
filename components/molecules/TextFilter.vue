<template>
  <div class="text-filter">
    <div class="text-filter__icon">
      <i class="material-icons">filter_alt</i>
    </div>
    <div class="text-filter__input">
      <TextField v-model="value" :placeholder="placeholder" full-width />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class TextFilter extends Vue {
  @Prop({ type: String })
  readonly value!: string

  @Prop({ type: String })
  readonly placeholder!: string
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
