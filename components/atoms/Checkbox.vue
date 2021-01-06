<template>
  <label class="checkbox">
    <input type="checkbox" />
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Checkbox extends Vue {
  @Prop({ type: String })
  readonly label!: string
}
</script>
