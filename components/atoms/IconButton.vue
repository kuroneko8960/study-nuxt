<template>
  <button :class="classes()" type="button">
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

  @Prop({ type: String })
  readonly variant!: '' | 'circle'

  classes() {
    return {
      'icon-button': true,
      [`icon-button--${this.variant}`]: !!this.variant,
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-button {
  color: #616161;
  transition: color 0.3s;

  &:hover {
    color: #2196f3;
  }

  &--circle {
    position: relative;
    background-color: #2196f3;
    color: #ffffff;
    width: 3em;
    height: 3em;
    border-radius: 100%;
    box-shadow: 1px 3px 3px rgba(#000000, 0.12);
    transition: background-color 0.3s;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 2em;
      transform: translateX(-0.5em) translateY(-0.5em);
    }

    &:hover {
      color: #ffffff;
      background-color: lighten(#2196f3, 5%);
    }
  }
}
</style>
