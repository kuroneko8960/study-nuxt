<template>
  <div class="task-list-view">
    <div class="task-list-view__filter">
      <TextFilter
        placeholder="表示するタスクをフィルター"
        @filter="changeFilter"
      />
    </div>
    <div class="task-list-view__list">
      <TaskList :tasks="filteredTasks" />
    </div>
    <div class="task-list-view__action">
      <ActionButton @action="trimTasks"> 完了済みのタスクを削除 </ActionButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { TaskRecord } from '../../store/tasks'

@Component
export default class TaskListView extends Vue {
  @Prop({ type: Array })
  readonly tasks!: TaskRecord[]

  filter: string = ''

  get filteredTasks() {
    if (!this.filter) return this.tasks

    return this.tasks.filter((task) => task.content.includes(this.filter))
  }

  changeFilter(filter: string) {
    this.filter = filter
  }
}
</script>

<style lang="scss" scoped>
.task-list-view {
  &__filter {
    margin-bottom: 1em;
  }

  &__action {
    margin-top: 1em;
    text-align: right;
  }
}
</style>
