<template>
  <label class="text-field">
    <span v-show="label" class="text-field__label">{{ label }}</span>
    <input
      v-model="value"
      type="text"
      class="text-field__input"
      :placeholder="placeholder"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {
  @Prop({ type: String })
  readonly value!: string

  @Prop({ type: String })
  readonly label!: string

  @Prop({ type: String })
  readonly placeholder!: string
}
</script>
