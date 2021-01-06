<template>
  <div class="modal-action">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal-action {
  padding: 1rem;
  margin: 0 -0.25rem;
  overflow: hidden;
  text-align: right;

  & > * {
    margin: 0 0.25rem;
  }
}
</style>
