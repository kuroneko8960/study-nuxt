<template>
  <button class="icon-button" type="button">
    <i class="material-icons">{{ icon }}</i>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class C extends Vue {
  @Prop({ type: String })
  readonly icon!: string
}
</script>

<style lang="scss" scoped>
.icon-button {
  color: #616161;
  transition: color 0.3s;

  &:hover {
    color: #2196f3;
  }
}
</style>
