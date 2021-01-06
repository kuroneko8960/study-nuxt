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
