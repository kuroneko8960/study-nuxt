<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="checked"
      @change="emitChange"
    />
    <span :class="labelClasses()">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Checkbox extends Vue {
  @Prop({ type: String })
  readonly label!: string

  @Prop({ type: Boolean })
  readonly isClear!: boolean

  @Prop({ type: Boolean, default: false })
  readonly checked!: boolean

  labelClasses() {
    return {
      checkbox__label: true,
      'checkbox__label--clear': this.isClear,
    }
  }

  emitChange(event: any) {
    this.$emit('change', event.target.checked)
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  display: inline-block;
  padding: 0.25em 0;
  padding-left: 1.75em;
  cursor: pointer;

  &__input {
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    left: 0;

    &::before {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      content: 'check_box_outline_blank';
      font-family: 'Material Icons';
      font-size: 1.5em;
      width: 1em;
      height: 1em;
      color: #9e9e9e;
      cursor: pointer;
    }

    &:checked::before {
      content: 'check_box';
      color: #4caf50;
    }
  }

  &__label {
    .checkbox__input:checked ~ &--clear {
      color: #9e9e9e;
      text-decoration: line-through;
    }
  }
}
</style>
