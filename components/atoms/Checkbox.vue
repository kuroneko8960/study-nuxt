<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox" />
    <div class="checkbox__body">
      <span class="checkbox__label">{{ label }}</span>
    </div>
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
