<template>
  <div class="task-list-view">
    <div class="task-list-view__filter">
      <TextFilter placeholder="表示するタスクをフィルター" />
    </div>
    <div class="task-list-view__list">
      <TaskList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-list-view {
  &__filter {
    margin-bottom: 1em;
  }
}
</style>
