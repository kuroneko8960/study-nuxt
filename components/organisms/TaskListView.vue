<template>
  <div class="task-list-view">
    <div class="task-list-view__filter">
      <TextFilter placeholder="表示するタスクをフィルター" />
    </div>
    <div class="task-list-view__list">
      <TaskList :tasks="tasks" />
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
}
</script>

<style lang="scss" scoped>
.task-list-view {
  &__filter {
    margin-bottom: 1em;
  }
}
</style>
