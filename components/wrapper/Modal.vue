<template>
  <div :class="classes">
    <div class="modal__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop({ type: Boolean })
  readonly isShow!: boolean

  get classes() {
    return {
      modal: true,
      'modal--show': this.isShow,
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(#000000, 0.7);
  box-shadow: 1px 3px 3px rgba(#000000, 0.12);

  &__content {
    display: block;
    max-width: 48rem;
    margin: 15% auto;
    background-color: #ffffff;
  }

  &--show {
    display: block;
  }
}
</style>
