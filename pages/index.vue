<template>
  <div class="index-page">
    <div class="index-page__header">
      <h1>タスク一覧</h1>
    </div>
    <div class="index-page__body">
      <TaskListView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-page {
  margin: 1rem 0;

  &__header {
    h1 {
      font-size: 1.25em;
      line-height: 1.5;
      border-bottom: 1px solid #009688;
    }

    margin-bottom: 1rem;
  }
}
</style>
