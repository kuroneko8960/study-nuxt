<template>
  <button :class="classes" @click.prevent="emitAction">
    <div class="action-button__body">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ActionButton extends Vue {
  @Prop({ type: String })
  readonly variant!: '' | 'primary'

  get classes() {
    return {
      'action-button': true,
      [`action-button--${this.variant}`]: !!this.variant,
    }
  }

  emitAction() {
    this.$emit('action')
  }
}
</script>

<style lang="scss" scoped>
.action-button {
  background-color: #e0e0e0;
  color: #000000;
  font-size: 0.9em;
  padding: 0.75em 1em;
  box-shadow: 1px 1px 1px rgba(#000000, 0.08);

  &:active {
    box-shadow: none;
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #9e9e9e;
    color: #707070;
  }

  &--primary {
    background-color: #2196f3;
    color: #ffffff;
  }
}
</style>
