<template>
  <div class="app-header">
    <div class="app-header__container">
      <div class="app-header__logo">
        <h1>
          <NuxtLink to="/">MyDashboard</NuxtLink>
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  background-color: #2196f3;
  color: #ffffff;

  &__container {
    max-width: 64rem;
    margin: 0 auto;
  }

  &__logo {
    padding: 0.5rem 0;
    font-size: 1.25em;
  }
}
</style>
