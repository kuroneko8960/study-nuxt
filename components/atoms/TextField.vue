<template>
  <label class="text-field">
    <span v-show="label" class="text-field__label">{{ label }}</span>
    <div class="text-field__body">
      <input
        ref="input"
        v-model="innerValue"
        type="text"
        :class="inputClasses"
        :placeholder="placeholder"
        @keypress.prevent.enter.exact="enableEnter"
        @keyup.prevent.enter.exact="emitEnter"
      />
      <i v-show="icon" class="text-field__icon material-icons">{{ icon }}</i>
    </div>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Ref } from 'nuxt-property-decorator'

@Component
export default class TextField extends Vue {
  @Prop({ type: String })
  readonly label!: string

  @Prop({ type: String })
  readonly placeholder!: string

  @Prop({ type: String })
  readonly icon!: string

  @Prop({ type: Boolean, default: false })
  readonly fullWidth!: boolean

  @Prop({ type: String })
  readonly value!: string

  canEnter: boolean = false

  @Ref('input')
  refInput!: HTMLInputElement

  get innerValue() {
    return this.value
  }

  set innerValue(value) {
    this.$emit('input', value)
  }

  get inputClasses() {
    return {
      'text-field__input': true,
      'text-field__input--full-width': this.fullWidth,
      'text-field__input--with-icon': !!this.icon,
    }
  }

  enableEnter() {
    this.canEnter = true
  }

  emitEnter() {
    if (!this.canEnter) return

    if (!this.value) {
      this.canEnter = false
      return
    }

    this.$emit('enter', this.value)
    this.canEnter = false
  }

  focus() {
    setTimeout(() => this.refInput.focus(), 0)
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  &__label {
    display: block;
    font-size: 0.8em;
    color: #9e9e9e;
    line-height: 1.5;
  }

  &__body {
    position: relative;
  }

  &__input {
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid #e0e0e0;
    font-size: 0.9em;
    color: #616161;
    background-color: #f5f5f5;
    transition: border-color 0.3s;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      border-bottom-color: #9e9e9e;
      color: #212121;

      &::placeholder {
        color: #9e9e9e;
      }
    }

    &--full-width {
      width: 100%;
    }

    &--with-icon {
      padding-left: 2em;
    }
  }

  &__icon {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    color: #9e9e9e;
  }
}
</style>
