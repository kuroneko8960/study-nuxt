<template>
  <div class="default-layout">
    <div class="default-layout__header">
      <AppHeader />
    </div>
    <div class="default-layout__container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  &__container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
}
</style>
