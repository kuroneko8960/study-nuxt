<template>
  <ul class="task-list">
    <li v-for="i in 10" :key="i" class="task-list__item">
      <Task :content="`Task ${i}`" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.task-list {
  margin: -1em 0;

  &__item {
    margin: 1em 0;
  }
}
</style>
