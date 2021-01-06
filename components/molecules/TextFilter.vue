<template>
  <div class="text-filter">
    <i class="material-icons">filter_alt</i>
    <TextField v-model="value" :placeholder="placeholder" />
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
